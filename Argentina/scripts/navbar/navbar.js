const navBar = () => document.querySelector(".navigation").innerHTML = `
<div class=".navigation">
<a class="active" href="#Argentina">Argentina</a>
<a href="#Madagascar">Madagascar</a>
<a href="#Tuvalu">Tuvalu</a>
<a href="#Poland">Poland</a>
</div>`

navBar()

const footer = () => document.querySelector(".footer").innerHTML = `<footer class="footer"> Purple Parrot Travel Agency Inc. 2021 </footer>
`
footer()

const logo = () => document.querySelector(".logo").innerHTML = `
<div class="logo">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/purple-parrot-elisabeth-lucas.jpg" alt="Purple Parrot Travel Agency Logo" class= "purple-image">
</div>`

logo()