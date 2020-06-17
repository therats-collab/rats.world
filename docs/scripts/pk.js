currentMember = 0;

async function updatePK() {

// var + const stuff
  var fronterNameList = [];
  var fronterPronounList = [];
  var fronterAvatarList = [];
  var fronterDescList = []
;

  const shortFormatter = new Intl.ListFormat('en', {
      style: 'narrow',
      type: 'unit'
  });
  const longFormatter = new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction'
  });

// /s/jjorc/members stuff
  // if count is in session storage, assume days/ids/names are too, and get them
  if (sessionStorage.getItem("count")) {
      $("#ratCount").text(sessionStorage.getItem("count"));
      $("#daysSince").text(sessionStorage.getItem("days"));
      $("#ratIDs").text(sessionStorage.getItem("ids"));
      $("#ratNames").text(sessionStorage.getItem("names"));

  } else {
      // if count isn't in session storage, harasses the pluralkit API and gets #ratCount, #daysSince, #ratIDs, #ratNames
      jQuery.get("https://api.pluralkit.me/v1/s/jjorc/members", function(data) {
          // #ratCount stuff
          $("#ratCount").text(data.length);
          sessionStorage.setItem("count", data.length);
          // #daysSince stuff
          let newest = data.sort((a, b) => {
              a = new Date(a.created);
              b = new Date(b.created);
              return b - a;
          });

          let hours = (Date.now() - new Date(newest[0].created)) / 1000 / 60 / 60;
          sessionStorage.setItem("days", parseInt(hours));
          $("#daysSince").text(parseInt(hours));

          // #ratIDs stuff
          var idList = [];
          for (var i in data) {
              memberID = data[i].id;
              idList.push(memberID);
          }

          sessionStorage.setItem("ids", shortFormatter.format(idList));
          $("#ratIDs").text(sessionStorage.getItem("ids"));

          // #ratNames stuff - gets display_name if set, if not gets name
          var nameList = [];
          for (i in data) {
              memberName = data[i].display_name || data[i].name;
              nameList.push(memberName);
          }
          sessionStorage.setItem("names", shortFormatter.format(nameList));
          $("#ratNames").text(sessionStorage.getItem("names"));
      });
  }

// /s/jjorc stuff
  // if desc is in session storage, assume sysName is too, and get them both
  if (sessionStorage.getItem("desc")) {
      $("#ratDesc").text(sessionStorage.getItem("desc"));
      $("#ratSysName").text(sessionStorage.getItem("sysName"));

  } else {
      // if desc isn't in session storage, harasses the pluralkit API and gets #ratDesc and #ratSysName
      jQuery.get("https://api.pluralkit.me/v1/s/jjorc", function(data) {
          sessionStorage.setItem("desc", data.description);
          sessionStorage.setItem("sysName", data.name);
          $("#ratDesc").text(sessionStorage.getItem("desc"));
          $("#ratSysName").text(sessionStorage.getItem("sysName"));
      });
  }

// /s/jjorc/fronters stuff
  // if fronters is in session storage, assume fronter0Name/fronter0Pronouns/fronter0Avatar/fronter0Desc/fronter0Avatar are too, and get them
  if (sessionStorage.getItem("fronters")) {
      $("#ratFronters").text(sessionStorage.getItem("fronters"));
      $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"));
      $("#fronter1Name").text(sessionStorage.getItem("fronter1Name"));
      $("#fronter2Name").text(sessionStorage.getItem("fronter2Name"));
      $("#fronter3Name").text(sessionStorage.getItem("fronter3Name"));
      $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
      $("#fronter5Name").text(sessionStorage.getItem("fronter5Name"));
      $("#fronter6Name").text(sessionStorage.getItem("fronter6Name"));
      $("#fronter7Name").text(sessionStorage.getItem("fronter7Name"));
      $("#fronter8Name").text(sessionStorage.getItem("fronter8Name"));
      $("#fronter9Name").text(sessionStorage.getItem("fronter9Name"));
      $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"));
      $("#fronter1Pronouns").text(sessionStorage.getItem("fronter1Pronouns"));
      $("#fronter2Pronouns").text(sessionStorage.getItem("fronter2Pronouns"));
      $("#fronter3Pronouns").text(sessionStorage.getItem("fronter3Pronouns"));
      $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
      $("#fronter5Pronouns").text(sessionStorage.getItem("fronter5Pronouns"));
      $("#fronter6Pronouns").text(sessionStorage.getItem("fronter6Pronouns"));
      $("#fronter7Pronouns").text(sessionStorage.getItem("fronter7Pronouns"));
      $("#fronter8Pronouns").text(sessionStorage.getItem("fronter8Pronouns"));
      $("#fronter9Pronouns").text(sessionStorage.getItem("fronter9Pronouns"));
      $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"));
      $("#fronter1Avatar").text(sessionStorage.getItem("fronter1Avatar"));
      $("#fronter2Avatar").text(sessionStorage.getItem("fronter2Avatar"));
      $("#fronter3Avatar").text(sessionStorage.getItem("fronter3Avatar"));
      $("#fronter4Avatar").text(sessionStorage.getItem("fronter4Avatar"));
      $("#fronter5Avatar").text(sessionStorage.getItem("fronter5Avatar"));
      $("#fronter6Avatar").text(sessionStorage.getItem("fronter6Avatar"));
      $("#fronter7Avatar").text(sessionStorage.getItem("fronter7Avatar"));
      $("#fronter8Avatar").text(sessionStorage.getItem("fronter8Avatar"));
      $("#fronter9Avatar").text(sessionStorage.getItem("fronter9Avatar"));
      $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"));
      $("#fronter1Desc").text(sessionStorage.getItem("fronter1Desc"));
      $("#fronter2Desc").text(sessionStorage.getItem("fronter2Desc"));
      $("#fronter3Desc").text(sessionStorage.getItem("fronter3Desc"));
      $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
      $("#fronter5Desc").text(sessionStorage.getItem("fronter5Desc"));
      $("#fronter6Desc").text(sessionStorage.getItem("fronter6Desc"));
      $("#fronter7Desc").text(sessionStorage.getItem("fronter7Desc"));
      $("#fronter8Desc").text(sessionStorage.getItem("fronter8Desc"));
      $("#fronter9Desc").text(sessionStorage.getItem("fronter9Desc"));
      $("#fronter0ID").attr("src", sessionStorage.getItem("fronter0Avatar"));
      $("#fronter1ID").attr("src", sessionStorage.getItem("fronter1Avatar"));
      $("#fronter2ID").attr("src", sessionStorage.getItem("fronter2Avatar"));
      $("#fronter3ID").attr("src", sessionStorage.getItem("fronter3Avatar"));
      $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
      $("#fronter5ID").attr("src", sessionStorage.getItem("fronter5Avatar"));
      $("#fronter6ID").attr("src", sessionStorage.getItem("fronter6Avatar"));
      $("#fronter7ID").attr("src", sessionStorage.getItem("fronter7Avatar"));
      $("#fronter8ID").attr("src", sessionStorage.getItem("fronter8Avatar"));
      $("#fronter9ID").attr("src", sessionStorage.getItem("fronter9Avatar"));
      totalFronters = (sessionStorage.getItem("ratFronterCount") - 1);
      if (totalFronters > 1) { 
        document.getElementById("currentfronters").innerText = "current fronters:";
      }
      console.log("[DEBUG] " + totalFronters + " total fronters (counting from 0).");

  } else {
      // if fronters isn't in session storage, harasses the pluralkit API and gets #fronter0Name/#fronter0Pronouns/#fronter0Avatar/#fronter0Desc/#fronterID
      jQuery.get("https://cors-anywhere.herokuapp.com/https://api.pluralkit.me/v1/s/jjorc/fronters", function(data) {

        $("#ratFronterCount").text((data.members.length - 1));
        sessionStorage.setItem("ratFronterCount", (data.members.length - 1));
        totalFronters = sessionStorage.getItem("ratFronterCount");
        if (totalFronters <= 0) {
          totalFronters = 0;
        }
        console.log("[DEBUG] " + totalFronters + " total fronters (counting from 0).");



          for (i in data.members) {
            if (String(data.members[i].name) == "undefined") {
              fronterName = "Asleep";
              fronterNameList.push(fronterName);
              console.log(fronterName);
            } else {
              fronterName = data.members[i].display_name || data.members[i].name;
              fronterNameList.push(fronterName);
              console.log(fronterName);
            }

            if ((String(data.members[i].avatar_url) == String(null)) || (String(data.members[i].avatar_url) == "undefined")) {
              fronterAvatar = "https://cdn.discordapp.com/avatars/169641538337505280/6a94d004139e2f61906f8e56d5620be8.png";
              fronterAvatarList.push(fronterAvatar);

            } else {
              fronterAvatar = data.members[i].avatar_url;
              fronterAvatarList.push(fronterAvatar);
            }

            if (String(data.members[i].pronouns) == String(null)) {
              fronterPronouns = "unknown";
              fronterPronounList.push(fronterPronouns);
            } else {
              fronterPronouns = data.members[i].pronouns;
              fronterPronounList.push(fronterPronouns);
            }

            if (String(data.members[i].description) == (String(null))) { 
              fronterDesc = "I don't have a description. Either I'm lazy and haven't updated my Pluralkit info, or I'm a generic account like 'others' which isn't a specific person. You tell me.";
              fronterDescList.push(fronterDesc);
            } else if (String(data.members[i].description) == String(undefined)) {
              fronterDesc = "We're asleep right now, so obviously no one's driving the rat mech. So... yeah. Zzz, and whatnot.";
              fronterDescList.push(fronterDesc);
            } else {
              fronterDesc = data.members[i].description;
              fronterDescList.push(fronterDesc);

            }
          }
          sessionStorage.setItem("fronters", longFormatter.format(fronterNameList));

          sessionStorage.setItem("fronter0Name", fronterNameList[0]);
          sessionStorage.setItem("fronter1Name", fronterNameList[1]);
          sessionStorage.setItem("fronter2Name", fronterNameList[2]);
          sessionStorage.setItem("fronter3Name", fronterNameList[3]);
          sessionStorage.setItem("fronter4Name", fronterNameList[4]);
          sessionStorage.setItem("fronter5Name", fronterNameList[5]);
          sessionStorage.setItem("fronter6Name", fronterNameList[6]);
          sessionStorage.setItem("fronter7Name", fronterNameList[7]);
          sessionStorage.setItem("fronter8Name", fronterNameList[8]);
          sessionStorage.setItem("fronter9Name", fronterNameList[9]);
          sessionStorage.setItem("fronter0Pronouns", fronterPronounList[0]);
          sessionStorage.setItem("fronter1Pronouns", fronterPronounList[1]);
          sessionStorage.setItem("fronter2Pronouns", fronterPronounList[2]);
          sessionStorage.setItem("fronter3Pronouns", fronterPronounList[3]);
          sessionStorage.setItem("fronter4Pronouns", fronterPronounList[4]);
          sessionStorage.setItem("fronter5Pronouns", fronterPronounList[5]);
          sessionStorage.setItem("fronter6Pronouns", fronterPronounList[6]);
          sessionStorage.setItem("fronter7Pronouns", fronterPronounList[7]);
          sessionStorage.setItem("fronter8Pronouns", fronterPronounList[8]);
          sessionStorage.setItem("fronter9Pronouns", fronterPronounList[9]);
          sessionStorage.setItem("fronter0Avatar", fronterAvatarList[0]);
          sessionStorage.setItem("fronter1Avatar", fronterAvatarList[1]);
          sessionStorage.setItem("fronter2Avatar", fronterAvatarList[2]);
          sessionStorage.setItem("fronter3Avatar", fronterAvatarList[3]);
          sessionStorage.setItem("fronter4Avatar", fronterAvatarList[4]);
          sessionStorage.setItem("fronter5Avatar", fronterAvatarList[5]);
          sessionStorage.setItem("fronter6Avatar", fronterAvatarList[6]);
          sessionStorage.setItem("fronter7Avatar", fronterAvatarList[7]);
          sessionStorage.setItem("fronter8Avatar", fronterAvatarList[8]);
          sessionStorage.setItem("fronter9Avatar", fronterAvatarList[9]);
          sessionStorage.setItem("fronter0Desc", fronterDescList[0]);
          sessionStorage.setItem("fronter1Desc", fronterDescList[1]);
          sessionStorage.setItem("fronter2Desc", fronterDescList[2]);
          sessionStorage.setItem("fronter3Desc", fronterDescList[3]);
          sessionStorage.setItem("fronter4Desc", fronterDescList[4]);
          sessionStorage.setItem("fronter5Desc", fronterDescList[5]);
          sessionStorage.setItem("fronter6Desc", fronterDescList[6]);
          sessionStorage.setItem("fronter7Desc", fronterDescList[7]);
          sessionStorage.setItem("fronter8Desc", fronterDescList[8]);
          sessionStorage.setItem("fronter9Desc", fronterDescList[9]);


          $("#ratFronters").text(sessionStorage.getItem("fronters"));
          $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"));
          $("#fronter1Name").text(sessionStorage.getItem("fronter1Name"));
          $("#fronter2Name").text(sessionStorage.getItem("fronter2Name"));
          $("#fronter3Name").text(sessionStorage.getItem("fronter3Name"));
          $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
          $("#fronter5Name").text(sessionStorage.getItem("fronter5Name"));
          $("#fronter6Name").text(sessionStorage.getItem("fronter6Name"));
          $("#fronter7Name").text(sessionStorage.getItem("fronter7Name"));
          $("#fronter8Name").text(sessionStorage.getItem("fronter8Name"));
          $("#fronter9Name").text(sessionStorage.getItem("fronter9Name"));
          $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"));
          $("#fronter1Pronouns").text(sessionStorage.getItem("fronter1Pronouns"));
          $("#fronter2Pronouns").text(sessionStorage.getItem("fronter2Pronouns"));
          $("#fronter3Pronouns").text(sessionStorage.getItem("fronter3Pronouns"));
          $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
          $("#fronter5Pronouns").text(sessionStorage.getItem("fronter5Pronouns"));
          $("#fronter6Pronouns").text(sessionStorage.getItem("fronter6Pronouns"));
          $("#fronter7Pronouns").text(sessionStorage.getItem("fronter7Pronouns"));
          $("#fronter8Pronouns").text(sessionStorage.getItem("fronter8Pronouns"));
          $("#fronter9Pronouns").text(sessionStorage.getItem("fronter9Pronouns"));
          $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"));
          $("#fronter1Avatar").text(sessionStorage.getItem("fronter1Avatar"));
          $("#fronter2Avatar").text(sessionStorage.getItem("fronter2Avatar"));
          $("#fronter3Avatar").text(sessionStorage.getItem("fronter3Avatar"));
          $("#fronter4Avatar").text(sessionStorage.getItem("fronter4Avatar"));
          $("#fronter5Avatar").text(sessionStorage.getItem("fronter5Avatar"));
          $("#fronter6Avatar").text(sessionStorage.getItem("fronter6Avatar"));
          $("#fronter7Avatar").text(sessionStorage.getItem("fronter7Avatar"));
          $("#fronter8Avatar").text(sessionStorage.getItem("fronter8Avatar"));
          $("#fronter9Avatar").text(sessionStorage.getItem("fronter9Avatar"));
          $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"));
          $("#fronter1Desc").text(sessionStorage.getItem("fronter1Desc"));
          $("#fronter2Desc").text(sessionStorage.getItem("fronter2Desc"));
          $("#fronter3Desc").text(sessionStorage.getItem("fronter3Desc"));
          $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
          $("#fronter5Desc").text(sessionStorage.getItem("fronter5Desc"));
          $("#fronter6Desc").text(sessionStorage.getItem("fronter6Desc"));
          $("#fronter7Desc").text(sessionStorage.getItem("fronter7Desc"));
          $("#fronter8Desc").text(sessionStorage.getItem("fronter8Desc"));
          $("#fronter9Desc").text(sessionStorage.getItem("fronter9Desc"));
          $("#fronter0ID").attr("src", sessionStorage.getItem("fronter0Avatar"));
          $("#fronter1ID").attr("src", sessionStorage.getItem("fronter1Avatar"));
          $("#fronter2ID").attr("src", sessionStorage.getItem("fronter2Avatar"));
          $("#fronter3ID").attr("src", sessionStorage.getItem("fronter3Avatar"));
          $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
          $("#fronter5ID").attr("src", sessionStorage.getItem("fronter5Avatar"));
          $("#fronter6ID").attr("src", sessionStorage.getItem("fronter6Avatar"));
          $("#fronter7ID").attr("src", sessionStorage.getItem("fronter7Avatar"));
          $("#fronter8ID").attr("src", sessionStorage.getItem("fronter8Avatar"));
          $("#fronter9ID").attr("src", sessionStorage.getItem("fronter9Avatar"));
          $("#ratFronterCount").text(sessionStorage.getItem("ratFronterCount"));
          if (totalFronters <= 0) {
            totalFronters = 0;
            sessionStorage.setItem("fronter0Desc", "zzz");
          }
          console.log("[DEBUG] " + totalFronters + " total fronters (counting from 0).");
                  // if there are 0 fronters, hide next and previous buttons
          if (parseInt(currentMember) == parseInt(totalFronters)) {
            console.log("[LOG] Hiding next button, at currentMember value of " + currentMember + ".");
            document.getElementById("currentfronters").style.display = 'none';
            document.getElementById("pkrow1").style.display = 'none';
            document.getElementById("pkrow2").style.display = 'none';
            document.getElementById("next").innerText = "";
            document.getElementById("previous").innerText = "";
            document.getElementById("fronter0Desc").innerText = "We're asleep right now, so obviously no one's driving the rat mech. So... yeah. Zzz, and whatnot.";

          }
  });
          }
function nextMember() {
  $( "#nextfronter" ).click(function() {  
    if (currentMember == 8) {
      // if 8th fronter, change to 9th fronter
      document.getElementById("fronter8Name").id = "fronter9Name";
      document.getElementById("fronter8Pronouns").id = "fronter9Pronouns";
      document.getElementById("fronter8ID").id = "fronter9ID";
      document.getElementById("fronter8Desc").id = "fronter9Desc";  
      // now everything is fronter9, but the text is unchanged!
      $("#fronter9Name").text(sessionStorage.getItem("fronter9Name"));
      $("#fronter9Pronouns").text(sessionStorage.getItem("fronter9Pronouns"));
      $("#fronter9Desc").text(sessionStorage.getItem("fronter9Desc"));
      $("#fronter9ID").attr("src", sessionStorage.getItem("fronter9Avatar"));
      console.log("[LOG] User moved from member 8 > 9.");
      currentMember = 9;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = "";
      
  
      } else {
    if (currentMember == 7) {
      // if 7th fronter, change to 8th fronter
      document.getElementById("fronter7Name").id = "fronter8Name";
      document.getElementById("fronter7Pronouns").id = "fronter8Pronouns";
      document.getElementById("fronter7ID").id = "fronter8ID";
      document.getElementById("fronter7Desc").id = "fronter8Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter8Name").text(sessionStorage.getItem("fronter8Name"));
      $("#fronter8Pronouns").text(sessionStorage.getItem("fronter8Pronouns"));
      $("#fronter8Desc").text(sessionStorage.getItem("fronter8Desc"));
      $("#fronter8ID").attr("src", sessionStorage.getItem("fronter8Avatar"));
      console.log("[LOG] User moved from member 7 > 8.");
      currentMember = 8;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      } else {
    if (currentMember == 6) {
      // if 6rd fronter, change to 7th fronter
      document.getElementById("fronter3Name").id = "fronter4Name";
      document.getElementById("fronter3Pronouns").id = "fronter4Pronouns";
      document.getElementById("fronter3ID").id = "fronter4ID";
      document.getElementById("fronter3Desc").id = "fronter4Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
      $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
      $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
      $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
      console.log("[LOG] User moved from member 3 > 4.");
      currentMember = 4;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      } else {
    if (currentMember == 5) {
      // if 3rd fronter, change to 4th fronter
      document.getElementById("fronter3Name").id = "fronter4Name";
      document.getElementById("fronter3Pronouns").id = "fronter4Pronouns";
      document.getElementById("fronter3ID").id = "fronter4ID";
      document.getElementById("fronter3Desc").id = "fronter4Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
      $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
      $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
      $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
      console.log("[LOG] User moved from member 3 > 4.");
      currentMember = 4;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
    
      } else {
    if (currentMember == 4) {
      // if 3rd fronter, change to 4th fronter
      document.getElementById("fronter3Name").id = "fronter4Name";
      document.getElementById("fronter3Pronouns").id = "fronter4Pronouns";
      document.getElementById("fronter3ID").id = "fronter4ID";
      document.getElementById("fronter3Desc").id = "fronter4Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
      $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
      $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
      $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
      console.log("[LOG] User moved from member 3 > 4.");
      currentMember = 4;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      } else {
    if (currentMember == 3) {
      // if 3rd fronter, change to 4th fronter
      document.getElementById("fronter3Name").id = "fronter4Name";
      document.getElementById("fronter3Pronouns").id = "fronter4Pronouns";
      document.getElementById("fronter3ID").id = "fronter4ID";
      document.getElementById("fronter3Desc").id = "fronter4Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
      $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
      $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
      $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
      console.log("[LOG] User moved from member  3 > 4.");
      currentMember = 4;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      } else {
      if (currentMember == 2) {
      // if 2nd fronter, change to 3rd fronter
      document.getElementById("fronter2Name").id = "fronter3Name";
      document.getElementById("fronter2Pronouns").id = "fronter3Pronouns";
      document.getElementById("fronter2ID").id = "fronter3ID";
      document.getElementById("fronter2Desc").id = "fronter3Desc";  
      // now everything is fronter1, but the text is unchanged!
      $("#fronter3Name").text(sessionStorage.getItem("fronter3Name"));
      $("#fronter3Pronouns").text(sessionStorage.getItem("fronter3Pronouns"));
      $("#fronter3Desc").text(sessionStorage.getItem("fronter3Desc"));
      $("#fronter3ID").attr("src", sessionStorage.getItem("fronter3Avatar"));
      console.log("[LOG] User moved from member 2 > 3.");
      currentMember = 3;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      }
      // if 1st fronter, change to 2nd fronter
      if (currentMember == 1) {
      document.getElementById("fronter1Name").id = "fronter2Name";
      document.getElementById("fronter1Pronouns").id = "fronter2Pronouns";
      document.getElementById("fronter1ID").id = "fronter2ID";
      document.getElementById("fronter1Desc").id = "fronter2Desc";  
      // now everything is fronter2, but the text is unchanged!
      $("#fronter2Name").text(sessionStorage.getItem("fronter2Name"));
      $("#fronter2Pronouns").text(sessionStorage.getItem("fronter2Pronouns"));
      $("#fronter2Desc").text(sessionStorage.getItem("fronter2Desc"));
      $("#fronter2ID").attr("src", sessionStorage.getItem("fronter2Avatar"));
      // now the text + id is fronter2
      console.log("[LOG] User moved from member 1 > 2.");
      currentMember = 2;
      document.getElementById("previous").innerText = "<";
      document.getElementById("next").innertext = ">";
      
      }
      // if 0th fronter, change to 1st fronter
      if (currentMember == 0)  {
        document.getElementById("fronter0Name").id = "fronter1Name";
        document.getElementById("fronter0Pronouns").id = "fronter1Pronouns";
        document.getElementById("fronter0ID").id = "fronter1ID";
        document.getElementById("fronter0Desc").id = "fronter1Desc";  
        // now everything is fronter1, but the text is unchanged!
        $("#fronter1Name").text(sessionStorage.getItem("fronter1Name"));
        $("#fronter1Pronouns").text(sessionStorage.getItem("fronter1Pronouns"));
        $("#fronter1Desc").text(sessionStorage.getItem("fronter1Desc"));
        $("#fronter1ID").attr("src", sessionStorage.getItem("fronter1Avatar"));
        // now the text + id is fronter1, so we show the previous button
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innertext = ">";
        console.log("[LOG] User moved from member 0 > 1. #prevfronter should be visible.");
        currentMember = 1;
        
        } 
      } 
    }
  }}}}
          // if there are only 2 fronters, remove the next button
  if (parseInt(currentMember) == parseInt(totalFronters)) {
    console.log("[LOG] Hiding next button, at currentMember value of " + currentMember + " and  totalFronters of " + totalFronters + ".");
    document.getElementById("next").innerText = "";
  }
  console.log("[DEBUG] Displaying member number " + currentMember + " (counting from 0).");

});
}

function previousMember() {
  $( "#prevfronter" ).click(function() {
    // if 0th fronter, log to console.
    if (currentMember == 0)  {
      console.log("[ERROR] User clicked the #prevfronter button, but were already on the 0th fronter. (...how?)");
    } else {
    // if 1st fronter, change to 0th fronter and hide
      if (currentMember == 1) {
        document.getElementById("fronter1Name").id = "fronter0Name";
        document.getElementById("fronter1Pronouns").id = "fronter0Pronouns";
        document.getElementById("fronter1ID").id = "fronter0ID";
        document.getElementById("fronter1Desc").id = "fronter0Desc";  
        // now everything is fronter0, but the text is unchanged!
        $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"));
        $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"));
        $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"));
        $("#fronter0ID").attr("src", sessionStorage.getItem("fronter0Avatar"));
        // now the text + id is fronter0, so we hide the previous button
        console.log("[LOG] User moved from member 1 > 0. #prevfronter should now be hidden.");
        currentMember = 0;
  
        document.getElementById("previous").innerText = "";
        document.getElementById("next").innerText = ">";
      }
      
      if (currentMember == 2) {
        // if 2nd fronter, change to 1st fronter
        document.getElementById("fronter2Name").id = "fronter1Name";
        document.getElementById("fronter2Pronouns").id = "fronter1Pronouns";
        document.getElementById("fronter2ID").id = "fronter1ID";
        document.getElementById("fronter2Desc").id = "fronter1Desc";  
        // now everything is fronter1, but the text is unchanged!
        $("#fronter1Name").text(sessionStorage.getItem("fronter1Name"));
        $("#fronter1Pronouns").text(sessionStorage.getItem("fronter1Pronouns"));
        $("#fronter1Desc").text(sessionStorage.getItem("fronter1Desc"));
        $("#fronter1ID").attr("src", sessionStorage.getItem("fronter1Avatar"));
        console.log("[LOG] User moved from member 2 > 1.");
        currentMember = 1;
        
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
      if (currentMember == 3) {
        // if 3rd fronter, change to 2nd fronter
        document.getElementById("fronter3Name").id = "fronter2Name";
        document.getElementById("fronter3Pronouns").id = "fronter2Pronouns";
        document.getElementById("fronter3ID").id = "fronter2ID";
        document.getElementById("fronter3Desc").id = "fronter2Desc";  
        // now everything is fronter2, but the text is unchanged!
        $("#fronter2Name").text(sessionStorage.getItem("fronter2Name"));
        $("#fronter2Pronouns").text(sessionStorage.getItem("fronter2Pronouns"));
        $("#fronter2Desc").text(sessionStorage.getItem("fronter2Desc"));
        $("#fronter2ID").attr("src", sessionStorage.getItem("fronter2Avatar"));
        console.log("[LOG] User moved from member 3 > 2.");
        currentMember = 2;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
  
      if (currentMember == 4) {
        // if 4th fronter, change to 3rd fronter
        document.getElementById("fronter4Name").id = "fronter3Name";
        document.getElementById("fronter4Pronouns").id = "fronter3Pronouns";
        document.getElementById("fronter4ID").id = "fronter3ID";
        document.getElementById("fronter4Desc").id = "fronter3Desc";  
        // now everything is fronter3, but the text is unchanged!
        $("#fronter3Name").text(sessionStorage.getItem("fronter3Name"));
        $("#fronter3Pronouns").text(sessionStorage.getItem("fronter3Pronouns"));
        $("#fronter3Desc").text(sessionStorage.getItem("fronter3Desc"));
        $("#fronter3ID").attr("src", sessionStorage.getItem("fronter3Avatar"));
        console.log("[LOG] User moved from member 4 > 3.");
        currentMember = 3;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
    
      if (currentMember == 5) {
        // if 5th fronter, change to 4th fronter
        document.getElementById("fronter5Name").id = "fronter4Name";
        document.getElementById("fronter5Pronouns").id = "fronter4Pronouns";
        document.getElementById("fronter5ID").id = "fronter4ID";
        document.getElementById("fronter5Desc").id = "fronter4Desc";  
        // now everything is fronter4, but the text is unchanged!
        $("#fronter4Name").text(sessionStorage.getItem("fronter4Name"));
        $("#fronter4Pronouns").text(sessionStorage.getItem("fronter4Pronouns"));
        $("#fronter4Desc").text(sessionStorage.getItem("fronter4Desc"));
        $("#fronter4ID").attr("src", sessionStorage.getItem("fronter4Avatar"));
        console.log("[LOG] User moved from member 5 > 4.");
        currentMember = 4;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
  
      if (currentMember == 6) {
        // if 6th fronter, change to 5th fronter
        document.getElementById("fronter6Name").id = "fronter5Name";
        document.getElementById("fronter6Pronouns").id = "fronter5Pronouns";
        document.getElementById("fronter6ID").id = "fronter5ID";
        document.getElementById("fronter6Desc").id = "fronter5Desc";  
        // now everything is fronter5, but the text is unchanged!
        $("#fronter5Name").text(sessionStorage.getItem("fronter5Name"));
        $("#fronter5Pronouns").text(sessionStorage.getItem("fronter5Pronouns"));
        $("#fronter5Desc").text(sessionStorage.getItem("fronter5Desc"));
        $("#fronter5ID").attr("src", sessionStorage.getItem("fronter5Avatar"));
        console.log("[LOG] User moved from member 6 > 5.");
        currentMember = 5;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
  
      if (currentMember == 7) {
        // if 7th fronter, change to 6th fronter
        document.getElementById("fronter7Name").id = "fronter6Name";
        document.getElementById("fronter7Pronouns").id = "fronter6Pronouns";
        document.getElementById("fronter7ID").id = "fronter6ID";
        document.getElementById("fronter7Desc").id = "fronter6Desc";  
        // now everything is fronter2, but the text is unchanged!
        $("#fronter6Name").text(sessionStorage.getItem("fronter6Name"));
        $("#fronter6Pronouns").text(sessionStorage.getItem("fronter6Pronouns"));
        $("#fronter6Desc").text(sessionStorage.getItem("fronter6Desc"));
        $("#fronter6ID").attr("src", sessionStorage.getItem("fronter6Avatar"));
        console.log("[LOG] User moved from member 7 > 6.");
        currentMember = 6;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
  
      if (currentMember == 8) {
        // if 8th fronter, change to 7th fronter
        document.getElementById("fronter8Name").id = "fronter7Name";
        document.getElementById("fronter8Pronouns").id = "fronter7Pronouns";
        document.getElementById("fronter8ID").id = "fronter7ID";
        document.getElementById("fronter8Desc").id = "fronter7Desc";  
        // now everything is fronter2, but the text is unchanged!
        $("#fronter8Name").text(sessionStorage.getItem("fronter7Name"));
        $("#fronter8Pronouns").text(sessionStorage.getItem("fronter7Pronouns"));
        $("#fronter8Desc").text(sessionStorage.getItem("fronter7Desc"));
        $("#fronter8ID").attr("src", sessionStorage.getItem("fronter7Avatar"));
        console.log("[LOG] User moved from member 8 > 7.");
        currentMember = 7;
  
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
  
      if (currentMember == 9) {
        // if 9th fronter, change to 8th fronter
        document.getElementById("fronter9Name").id = "fronter8Name";
        document.getElementById("fronter9Pronouns").id = "fronter8Pronouns";
        document.getElementById("fronter9ID").id = "fronter8ID";
        document.getElementById("fronter9Desc").id = "fronter8Desc";  
        // now everything is fronter2, but the text is unchanged!
        $("#fronter8Name").text(sessionStorage.getItem("fronter8Name"));
        $("#fronter8Pronouns").text(sessionStorage.getItem("fronter8Pronouns"));
        $("#fronter8Desc").text(sessionStorage.getItem("fronter8Desc"));
        $("#fronter8ID").attr("src", sessionStorage.getItem("fronter8Avatar"));
        console.log("[LOG] User moved from member 9 > 8.");
        currentMember = 8;
        
        document.getElementById("previous").innerText = "<";
        document.getElementById("next").innerText = ">";
      }
    }
    console.log("[DEBUG] Displaying member number " + currentMember + " (counting from 0).");
  }
);
}
previousMember();
nextMember();
}
