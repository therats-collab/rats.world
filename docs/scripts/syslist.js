async function updateSysList() {
    // var + const stuff
    currentMember = 0;
    var ratNameList = [];
    var ratPronounList = [];
    var ratIDList = [];
    var ratColorList = [];
    var ratAvatarList = [];
    var ratDescList = [];
    var ratBirthdayList = [];
    var ratCreationList = [];
    var totalRats = -1;

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
        
        //// data.members.length stuff ////
            // [dq] iif no one iin front, dii2able prev and next nav
            if (data.members.length == 0) {
                document.getElementById("previous").style.display = 'none';
                document.getElementById("next").style.display = 'none';
              }

            // [dq] count from 1 liike a normal human and 2ave to 2e22iionStorage
            totalRats = (data.members.length - 1);
            $("#ratCount").text(totalRats);
            sessionStorage.setItem("ratCount", totalRats);

            // [dq] debug 2tuff
            console.log("[DEBUG] " + totalRats + " total Rats (counting from 0). The website counts from 1, because that's what normal humans use.");
            console.log("[DEBUG] Assume all console messages are counting from 0, unless otherwise stated.");
        //// data.members stuff ////
            for (var i in data.members) {
                // all ID's are valid/public, so push
                ratIDList.push(data.members[i].id);
                // all members were created (lmao) so push
                ratCreationList.push(data.members[i].created);
            
                // push default name if both are unset/private, else push display name, else push name
                if (String(data.members[i].name) == "null" && String(data.members[i].display_name) == "null") {
                    ratColorList.push(defaultName);
                } else {
                    // Get display name if set, else get name.
                    ratName = data.members[i].display_name || data.members[i].name;
                    // Capitalises the first letter of each word, and pushes the result to list.
                    // The split magic breaks on names with length 1, so we need to account for that.
                    if (ratName.length == 1) { 
                        ratNameList.push(ratName.toUpperCase)
                    } else {
                        ratNameList.push(ratName.split(' ').map(i => i[0].toUpperCase() + i.substring(1)).join(' '));
                    }
                }
            
                // push default color if unset/private, else push member color
                if (String(data.members[i].color) == "null") {
                    ratColorList.push(defaultColor);
                } else {
                    ratColorList.push(data.members[i].color);
                }
            
                // push default birthday if unset/private, else push member birthday
                if (String(data.members[i].birthday) == "null") {
                    ratBirthdayList.push(defaultBirthday);
                } else {
                    ratBirthdayList.push(data.members[i].birthday);
                }
            
                // push default pronouns if unset/private, else push member pronouns
                if (String(data.members[i].pronouns) == "null") {
                    ratPronounList.push(defaultPronouns);
                } else {
                    ratPronounList.push(data.members[i].pronouns);
                }
            
                // push default avatar if unset/private, else push member avatar
                if (String(data.members[i].avatar_url) == "null") {
                    ratAvatarList.push(defaultAvatar);
                } else {
                    ratAvatarList.push(data.members[i].avatar_url);
                }
            
                // push defauly desc if unset/private, else push member desc
                if (String(data.members[i].description) == "null") {
                    ratDescList.push(defaultDesc);
                } else {
                    ratDescList.push(data.members[i].description);
                }
                console.log("[-- MEMBER " + i + "--]")
                console.log("id:" + ratIDList[i])
                console.log("name:" + ratNameList[i])
                console.log("birthday:" + ratBirthdayList[i])
                console.log("pronouns:" + ratPronounList[i])
                console.log("avatar url:" + ratAvatarList[i])
                console.log("desc:" + ratDescList[i])
            }
        });
    }
}