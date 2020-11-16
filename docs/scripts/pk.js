async function updatePK() {
  console.log("[DEBUG] updatePK() has started! Hooray!")
  // TODO: Make this firefox friendly and reimplement
  // const shortFormatter = new Intl.ListFormat('en', {
  //     style: 'narrow',
  //     type: 'unit'
  // });
  // const longFormatter = new Intl.ListFormat('en', {
  //     style: 'long',
  //     type: 'conjunction'
  // });

// /s/mouse/members stuff
  // if count is in session storage, assume days/ids/names are too, and get them
  if (sessionStorage.getItem("count")) {
      $("#ratCount").text(sessionStorage.getItem("count"));
  //  $("#daysSince").text(sessionStorage.getItem("days"));
  //  $("#ratIDs").text(sessionStorage.getItem("ids"));
  //  $("#ratNames").text(sessionStorage.getItem("names"));

  } else {
      // if count isn't in session storage, harasses the pluralkit API and gets #ratCount, #daysSince, #ratIDs, #ratNames
      jQuery.get("https://api.pluralkit.me/v1/s/mouse/members", function(data) {
          // #ratCount stuff
          $("#ratCount").text(data.length);
          sessionStorage.setItem("count", data.length);
          
          // #daysSince stuff
          // let newest = data.sort((a, b) => {
          //     a = new Date(a.created);
          //     b = new Date(b.created);
          //     return b - a;
          // });

          // let hours = (Date.now() - new Date(newest[0].created)) / 1000 / 60 / 60;
          // sessionStorage.setItem("days", parseInt(hours));
          // $("#daysSince").text(parseInt(hours));

          // // #ratIDs stuff
          // var idList = [];
          // for (var i in data) {
          //     memberID = data[i].id;
          //     idList.push(memberID);
          // }

          // sessionStorage.setItem("ids", shortFormatter.format(idList));
          // $("#ratIDs").text(sessionStorage.getItem("ids"));

          // // #ratNames stuff - gets display_name if set, if not gets name
          // var nameList = [];
          // for (i in data) {
          //     memberName = data[i].display_name || data[i].name;
          //     nameList.push(memberName);
          // }
          // sessionStorage.setItem("names", shortFormatter.format(nameList));
          // $("#ratNames").text(sessionStorage.getItem("names"));
      });
  }

// /s/jjorc stuff
  // if desc is in session storage, assume sysName is too, and get them both
  // if (sessionStorage.getItem("desc")) {
  //     $("#ratDesc").text(sessionStorage.getItem("desc"));
  //     $("#ratSysName").text(sessionStorage.getItem("sysName"));

  // } else {
  //     // if desc isn't in session storage, harasses the pluralkit API and gets #ratDesc and #ratSysName
  //     jQuery.get("https://api.pluralkit.me/v1/s/jjorc", function(data) {
  //         sessionStorage.setItem("desc", data.description);
  //         sessionStorage.setItem("sysName", data.name);
  //         $("#ratDesc").text(sessionStorage.getItem("desc"));
  //         $("#ratSysName").text(sessionStorage.getItem("sysName"));
  //     });
  // }
}
