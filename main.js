const LinkSocialMedia = {
  github: 'felipeamerico',
  youtube: 'testeyoutube',
  facebook: 'testefacebook',
  instagram: 'z1felipe',
  twitter: 'z1felipe',
  social: '',
  url: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  url = `https://api.github.com/users/${LinkSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
    })
  alert(url)
}
getGitHubProfileInfos()
