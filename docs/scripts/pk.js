async function updatePK(){
  
    const shortFormatter = new Intl.ListFormat('en', { style: 'narrow', type: 'unit' })
    const longFormatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' })
        
        
    if(sessionStorage.getItem("count")){
        $("#ratCount").text(sessionStorage.getItem("count"))
        $("#daysSince").text(sessionStorage.getItem("days"))
        $("#ratIDs").text(sessionStorage.getItem("ids"))
        $("#ratNames").text(sessionStorage.getItem("names"))
        $("#fronter0Name").text(sessionStorage.getItem("fronter0"))

    } else {
        jQuery.get("https://api.pluralkit.me/v1/s/jjorc/members", function (data){
        $("#ratCount").text(data.length)
        sessionStorage.setItem("count",data.length)
        let newest = data.sort((a,b)=>{
            a = new Date(a.created)
            b = new Date(b.created)
            return b - a
        })
        let hours = (Date.now() - new Date(newest[0].created)) / 1000 / 60 / 60
        sessionStorage.setItem("days",parseInt(hours))
        $("#daysSince").text(parseInt(hours))
        
        
        // Get IDs, yeet them into a list
        var idList = []
        for (i in data) {
          memberID = data[i].id
          idList.push(memberID)
        }
        sessionStorage.setItem("ids",shortFormatter.format(idList))
        $("#ratIDs").text(sessionStorage.getItem("ids"))
        
        // Get display names if available, else get names
        var nameList = []
        for (i in data) {
          memberName = data[i].display_name || data[i].name
          nameList.push(memberName)
        }
        sessionStorage.setItem("names",shortFormatter.format(nameList))
        $("#ratNames").text(sessionStorage.getItem("names"))
        
    })
    }




      // get desc + sysname
    if(sessionStorage.getItem("desc")){
    	$("#ratDesc").text(sessionStorage.getItem("desc"))
    	$("#ratSysName").text(sessionStorage.getItem("sysName"))
    } else {
    	jQuery.get("https://api.pluralkit.me/v1/s/jjorc", function (data){
    	sessionStorage.setItem("desc", data.description)
    	sessionStorage.setItem("sysName", data.name)
    	$("#ratDesc").text(sessionStorage.getItem("desc"))
    	$("#ratSysName").text(sessionStorage.getItem("sysName"))
    	})
    }
    








    // get fronter name list
    var fronterNameList = []
    var fronterPronounList = []
    var fronterAvatarList = []
    var fronterDescList = []
    if(sessionStorage.getItem("fronters")){ // don't re-get stuff you already got 
      $("#ratFronters").text(sessionStorage.getItem("fronters"))
      $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"))
      $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"))
      $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"))
      $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"))
    } else {
      jQuery.get("https://api.pluralkit.me/v1/s/jjorc/fronters", function (data){
        for (i in data.members) {
          fronterName = data.members[i].display_name || data.members[i].name
          fronterNameList.push(fronterName)
          fronterPronouns = data.members[i].pronouns
          fronterPronounList.push(fronterPronouns)
          fronterAvatar = data.members[i].avatar_url
          fronterAvatarList.push(fronterAvatar)
          fronterDesc = data.members[i].description
          fronterDescriptionList.push(fronterDesc)
          }
        sessionStorage.setItem("fronters", longFormatter.format(fronterNameList))
        $("#ratFronters").text(sessionStorage.getItem("fronters"))
        
        sessionStorage.setItem("fronter0Name", fronterNameList[0])
        $("#fronter0Name").text(sessionStorage.getItem("fronter0Name"))
        sessionStorage.setItem("fronter0Pronouns", fronterPronounList[0])
        $("#fronter0Pronouns").text(sessionStorage.getItem("fronter0Pronouns"))
        sessionStorage.setItem("fronter0Avatar", fronterAvatarList[0])
        $("#fronter0Avatar").text(sessionStorage.getItem("fronter0Avatar"))
        sessionStorage.setItem("fronter0Desc", fronterDescList[0])
        $("#fronter0Desc").text(sessionStorage.getItem("fronter0Desc"))
       
        
        })    
  }
}














