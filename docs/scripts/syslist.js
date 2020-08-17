async function updateSysList() {
    // var + const stuff
    currentMember = 0;

    var defaultName = "Unknown"
    var defaultColor = "#666666";
    var defaultAvatar = "https://rats.world/images/default.png";
    var defaultPronouns = "n/a";
    var defaultDesc = "";
    var defaultBirthday = "n/a";
    console.log("[DEBUG] updateSysList() has started! Hooray!");

// /s/jjorc/fronters stuff
  // if fronters is in session storage, assume each fronters name, pronouns, desc, and avatar is too, and get them all
    if (sessionStorage.getItem("fronters")) {
        console.log("[DEBUG] Found fronter info in sessionStorage, not harassing the API.");

    } else {
        console.log("[DEBUG] Couldn't find fronter info in sessionStorage, using jQuery to harass the API.");
        // if fronters isn't in session storage, harasses the pluralkit API and gets #fronter0Name/#fronter0Pronouns/#fronter0Avatar/#fronter0Desc/#fronterID
        jQuery.get("https://cors-anywhere.herokuapp.com/https://api.pluralkit.me/v1/s/jjorc/members", function(data) {
        
        // //// data.members.length stuff ////
        //     // [dq] iif no one iin front, dii2able prev and next nav
        //     if (data.members.length == 0) {
        //         document.getElementById("previous").style.display = 'none';
        //         document.getElementById("next").style.display = 'none';
        //       }

        //     // [dq] count from 1 liike a normal human and 2ave to 2e22iionStorage
        //     totalRats = (data.members.length - 1);
        //     $("#ratCount").text(totalRats);
        //     sessionStorage.setItem("ratCount", totalRats);

            // // [dq] debug 2tuff
            // console.log("[DEBUG] " + totalRats + " total Rats (counting from 0). The website counts from 1, because that's what normal humans use.");
            // console.log("[DEBUG] Assume all console messages are counting from 0, unless otherwise stated.");
        //// data stuff ////
            var rats = data;
            for (var i in data) {
                member = data[i];
                rats[i] = member

                // use default name if both are unset/private, else use display name, else use name
                if (String(rats[i].name) == "null" && String(rats[i].display_name) == "null") {
                    rats[i].name = defaultName;
                } else {
                    // Get display name if set, else get name.
                    // [dq] for the purpo2e2 of dii2playiing a name on our web2iite, we're only u2iing name
                    rats[i].name = rats[i].display_name || rats[i].name;
                    // Capitalises the first letter of each word, and usees the result to list.
                    // The split magic breaks on names with length 1, so we need to account for that.
                    if (rats[i].name.length == 1) { 
                        rats[i].name = rats[i].name.toUpperCase()
                    } else {
                        rats[i].name = (rats[i].name.split(" ").map(i => i[0].toUpperCase() + i.substring(1)).join(" "));
                    }
                }
                
                // use default color if unset/private
                if (String(data[i].color) == "null") {
                    rats[i].color = defaultColor;
                }
            
                // use default birthday if unset/private
                if (String(data[i].birthday) == "null") {
                    rats[i].birthday = defaultBirthday;
                }
            
                // use default pronouns if unset/private
                if (String(data[i].pronouns) == "null") {
                    rats[i].pronouns = defaultPronouns;
                }
            
                // use default avatar if unset/private
                if (String(data[i].avatar_url) == "null") {
                    rats[i].avatar_url = defaultAvatar;
                } 
            
                // use defauly desc if unset/private
                if (String(data[i].description) == "null") {
                   rats[i].description = defaultDesc;
                }

                // basic functions: make a table
                var table = document.createElement("table");
                table.id = rats[i].id
                table.className = "sysList"
                table.setAttribute("display", "inline-table")
                var row1 = document.createElement("th"); // avatar / name / pronouns
                var row2 = document.createElement("tr"); // desc / -- / --

                var avatarCell = document.createElement("td"); 
                var nameCell = document.createElement("td");
                var pronounsCell = document.createElement("td");
                var descCell = document.createElement("td");
            
                var avatar = document.createElement("img")
                avatarCell.id = "nopadding"
                avatar.src = rats[i].avatar_url

                var name = document.createTextNode(rats[i].name);
                var pronouns = document.createTextNode(rats[i].pronouns);
                var desc = document.createTextNode("");
                descCell.colSpan = 3
                descCell.id = (`${rats[i].description}_desc`)
                descCell.setAttribute("markdown", "1")
                table.appendChild(row1)
                // add each cell to table
                row1.appendChild(avatarCell);
                row1.appendChild(nameCell);
                row1.appendChild(pronounsCell);
                // add dontents to each cell
                avatarCell.appendChild(avatar);
                nameCell.appendChild(name);
                pronounsCell.appendChild(pronouns);

                table.appendChild(row2);
                row2.appendChild(descCell)
                descCell.appendChild(desc)
                document.getElementById('fullList').appendChild(table);
                console.log(rats[i].id)
                document.getElementById(`${rats[i].description}_desc`).innerHTML = (converter.makeHtml("**Description** " + rats[i].description))
                console.log("[-- MEMBER " + i + "--]")
                console.log("id:" + rats[i].id)
                console.log("name:" + rats[i].name)
                console.log("birthday:" + rats[i].birthday)
                console.log("pronouns:" + rats[i].pronouns)
                console.log("avatar url:" + rats[i].avatar_url)
                console.log("desc:" + rats[i].description)
            }
        });
    }
}