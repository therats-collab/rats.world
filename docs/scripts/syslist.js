async function updateSysList() {
    // var + const stuff
    currentMember = 0;
    var fronterNameList = [];
    var fronterPronounList = [];
    var fronterIDList = [];
    var fronterColorList = [];
    var fronterAvatarList = [];
    var fronterDescList = [];
    var fronterBirthdayList = [];
    var fronterCreationList = [];
    var totalFronters = -1;

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
        jQuery.get("https://cors-anywhere.herokuapp.com/https://api.pluralkit.me/v1/s/jjorc/fronters", function(data) {
        
        //// data.members.length stuff ////
            // [dq] iif no one iin front, dii2able prev and next nav
            if (data.members.length == 0) {
                document.getElementById("previous").style.display = 'none';
                document.getElementById("next").style.display = 'none';
              }

            // [dq] count from 1 liike a normal human and 2ave to 2e22iionStorage
            totalFronters = (data.members.length - 1);
            $("#ratFronterCount").text(totalFronters);
            sessionStorage.setItem("ratFronterCount", totalFronters);

            // [dq] debug 2tuff
            console.log("[DEBUG] " + totalFronters + " total fronters (counting from 0). The website counts from 1, because that's what normal humans use.");
            console.log("[DEBUG] Assume all console messages are counting from 0, unless otherwise stated.");
        //// data.members stuff ////
            for (var i in data.members) {
                // all ID's are valid/public, so push
                fronterIDList.push(data.members[i].id);
                // all members were created (lmao) so push
                fronterCreationList.push(data.members[i].created);
            
                // push default name if both are unset/private, else push display name, else push name
                if (String(data.members[i].name) == "null" && String(data.members[i].display_name) == "null") {
                    fronterColorList.push(defaultName);
                } else {
                    // Get display name if set, else get name.
                    fronterName = data.members[i].display_name || data.members[i].name;
                    // Capitalises the first letter of each word, and pushes the result to list.
                    // The split magic breaks on names with length 1, so we need to account for that.
                    if (fronterName.length = 1) { 
                        fronterNameList.push(fronterName.toUpperCase)
                    } else {
                        fronterNameList.push(fronterName.split(' ').map(i => i[0].toUpperCase() + i.substring(1)).join(' '));
                    }
                }
            
                // push default color if unset/private, else push member color
                if (String(data.members[i].color) == "null") {
                    fronterColorList.push(defaultColor);
                } else {
                    fronterColorList.push(data.members[i].color);
                }
            
                // push default birthday if unset/private, else push member birthday
                if (String(data.members[i].birthday) == "null") {
                    fronterBirthdayList.push(defaultBirthday);
                } else {
                    fronterBirthdayList.push(data.members[i].birthday);
                }
            
                // push default pronouns if unset/private, else push member pronouns
                if (String(data.members[i].pronouns) == "null") {
                    fronterPronounList.push(defaultPronouns);
                } else {
                    fronterPronounList.push(data.members[i].pronouns);
                }
            
                // push default avatar if unset/private, else push member avatar
                if (String(data.members[i].avatar_url) == "null") {
                    fronterAvatarList.push(defaultAvatar);
                } else {
                    fronterAvatarList.push(data.members[i].avatar_url);
                }
            
                // push defauly desc if unset/private, else push member desc
                if (String(data.members[i].description) == "null") {
                    fronterDescList.push(defaultDesc);
                } else {
                    fronterDescList.push(data.members[i].description);
                }
                console.log("[-- MEMBER " + i + "--]")
                console.log("id:" + fronterIDList[i])
                console.log("name:" + fronterNameList[i])
                console.log("birthday:" + fronterBirthdayList[i])
                console.log("pronouns:" + fronterPronounList[i])
                console.log("avatar url:" + fronterAvatarList[i])
                console.log("desc:" + fronterDescList[i])
            }
        });
    }
}