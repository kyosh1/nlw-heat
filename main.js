const LinksSocialMedia = {
    github: 'kyosh1',
    youtube: 'channel/UCHC9iVPnGfMuvWvCSBKf9Lw',
    facebook: 'kyosh1',
    instagram: 'kyosh1',
    twitter: 'kyosh1'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        console.log(li.children[0].href)
    }
}

async function getGithubProfile() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

    const res = await axios.get(url);
    const { name, bio, avatar_url } = res.data;

    username.textContent = name;
    user_avatar.src = avatar_url;
    bioU.textContent = bio || "As a developer focused on web programming";
}

getGithubProfile()
changeSocialMediaLinks()
