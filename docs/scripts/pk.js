async function updatePK() {
// var + const stuff
  var fronterNameList = []
  var fronterPronounList = []
  var fronterAvatarList = []
  var fronterDescList = []

  const shortFormatter = new Intl.ListFormat('en', {
      style: 'narrow',
      type: 'unit'
  })
  const longFormatter = new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction'
  })

// /s/jjorc/members stuff
  // if count is in session storage, assume days/ids/names are too, and get them
  if (sessionStorage.getItem("count")) {
      $("#ratCount").text(sessionStorage.getItem("count"))
      $("#daysSince").text(sessionStorage.getItem("days"))
      $("#ratIDs").text(sessionStorage.getItem("ids"))
      $("#ratNames").text(sessionStorage.getItem("names"))

  } else {
      // if count isn't in session storage, harasses the pluralkit API and gets #ratCount, #daysSince, #ratIDs, #ratNames
      jQuery.get("https://api.pluralkit.me/v1/s/jjorc/members", function(data) {
          // #ratCount stuff
          $("#ratCount").text(data.length)
          sessionStorage.setItem("count", data.length)
          // #daysSince stuff
          let newest = data.sort((a, b) => {
              a = new Date(a.created)
              b = new Date(b.created)
              return b - a
          })

          let hours = (Date.now() - new Date(newest[0].created)) / 1000 / 60 / 60
          sessionStorage.setItem("days", parseInt(hours))
          $("#daysSince").text(parseInt(hours))

          // #ratIDs stuff
          var idList = []
          for (i in data) {
              memberID = data[i].id
              idList.push(memberID)
          }

          sessionStorage.setItem("ids", shortFormatter.format(idList))
          $("#ratIDs").text(sessionStorage.getItem("ids"))

          // #ratNames stuff - gets display_name if set, if not gets name
          var nameList = []
          for (i in data) {
              memberName = data[i].display_name || data[i].name
              nameList.push(memberName)
          }
          sessionStorage.setItem("names", shortFormatter.format(nameList))
          $("#ratNames").text(sessionStorage.getItem("names"))
      })
  }

// /s/jjorc stuff
  // if desc is in session storage, assume sysName is too, and get them both
  if (sessionStorage.getItem("desc")) {
      $("#ratDesc").text(sessionStorage.getItem("desc"))
      $("#ratSysName").text(sessionStorage.getItem("sysName"))

  } else {
      // if desc isn't in session storage, harasses the pluralkit API and gets #ratDesc and #ratSysName
      jQuery.get("https://api.pluralkit.me/v1/s/jjorc", function(data) {
          sessionStorage.setItem("desc", data.description)
          sessionStorage.setItem("sysName", data.name)
          $("#ratDesc").text(sessionStorage.getItem("desc"))
          $("#ratSysName").text(sessionStorage.getItem("sysName"))
      })
  }

// /s/jjorc/fronters stuff
  // if fronters is in session storage, assume fronter0Name/fronter0Pronouns/fronter0Avatar/fronter0Desc/fronter0Avatar are too, and get them
  if (sessionStorage.getItem("fronters")) {
      $("#ratFronters").text(sessionStorage.getItem("fronters"))
      $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"))
      $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"))
      $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"))
      $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"))
      $("#fronter0ID").attr("src", sessionStorage.getItem("fronter0Avatar"));
      console.log(fronter0Name)

  } else {
      // if fronters isn't in session storage, harasses the pluralkit API and gets #fronter0Name/#fronter0Pronouns/#fronter0Avatar/#fronter0Desc/#fronterID
      jQuery.get("https://cors-anywhere.herokuapp.com/https://api.pluralkit.me/v1/s/jjorc/fronters", function(data) {
          for (i in data.members) {
              fronterName = data.members[i].display_name || data.members[i].name
              fronterNameList.push(fronterName)
              fronterPronouns = data.members[i].pronouns
              fronterPronounList.push(fronterPronouns)
              fronterAvatar = data.members[i].avatar_url
              fronterAvatarList.push(fronterAvatar)
              fronterDesc = data.members[i].description
              fronterDescList.push(fronterDesc)
              sessionStorage.setItem("fronters", longFormatter.format(fronterNameList))
              sessionStorage.setItem("fronter0Name", fronterNameList[0])
              sessionStorage.setItem("fronter0Pronouns", fronterPronounList[0])
              sessionStorage.setItem("fronter0Avatar", fronterAvatarList[0])
              sessionStorage.setItem("fronter0Desc", fronterDescList[0])

              $("#ratFronters").text(sessionStorage.getItem("fronters"))
              $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"))
              $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"))
              $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"))
              $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"))
              $("#fronter0ID").attr("src", sessionStorage.getItem("fronter0Avatar"));
          }
      })
  }
}