
const feed = document.getElementById('feed');
const loader = document.getElementById('loader');
const realUser = document.getElementById('realUser')
const realUserImg = document.getElementById('realUserImg')
const times = ['hours', 'menutes', 'days', 'months']
let isLogedIn = false
const currentUser = JSON.parse(localStorage.getItem('currentUser'))

if (currentUser){
    isLogedIn = true
}
if (isLogedIn){
    document.getElementById('anonymousUser').classList.add("hidden")
    realUser.classList.remove("hidden")
    realUserImg.src = currentUser.profile
}
function fillLikeIcon(e) {
    if (isLogedIn){
    const svg = e.currentTarget.children[0]
    if (svg.style.fill === 'none') {
        svg.style.fill = 'red'
        e.currentTarget.classList.add('text-red-500')
        e.currentTarget.classList.remove('text-gray-500')
    } else {
        svg.style.fill = 'none'
        e.currentTarget.classList.add('text-gray-500')
        e.currentTarget.classList.remove('text-red-500')
    }
    }else{
        window.location.replace("login.html")
    }
}

function fillSaveIcon(e) {
    if (isLogedIn){
    const svg = e.currentTarget.children[0]
    if (svg.style.fill === 'none') {
        svg.style.fill = 'gray'
        e.currentTarget.classList.add('text-gray-600')
        e.currentTarget.classList.remove('text-gray-500')
    } else {
        svg.style.fill = 'none'
        e.currentTarget.classList.add('text-gray-500')
        e.currentTarget.classList.remove('text-gray-600')
    }
    }else{
        window.location.replace("login.html")
    }

}

function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}
// show red dot if new messages
redDot = document.getElementById('message_red_dot');
newMessage = true
if (newMessage) {
    redDot.classList.add("flex")
    redDot.classList.remove("hidden")

}
function chatOpen(){
    if (isLogedIn){
        window.location.replace("chat.html")
}else{
        window.location.replace("login.html")
    }
}

function loadRandomPost() {
    posts = [
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Abderrahim EL Yaagoubi",
            postText: "Need help with a React project, budget is negotiable!",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Bilal Bahri",
            postText: "NEED HELP: Looking for a Graphic Design expert for a logo refresh. Budget: $500.",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Yassine",
            postText: "HIRING: Looking for a freelance SEO for long-term collaboration. DM me!",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Marwa",
            postText: "FREELANCER: React Developer available for new projects. Check my portfolio!",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Anas",
            postText: "SELLING: Professional Mechanical Keyboard. Perfect for devs. PM for details.",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
        {
            profile: `https://i.pravatar.cc/3${Math.floor(Math.random() * 99) + 1}`,
            username: "Abdelbasset",
            postText: "FOR SALE: Selling my MacBook Pro 2021. Great condition! Asking $1200.",
            images: [`https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`, `https://picsum.photos/3${Math.floor(Math.random() * 99) + 1}`]
        },
    ]
    return posts


}
function getPost() {

    post = loadRandomPost()[Math.floor(Math.random() * 6)]
    const newPost = `
        <div class=" max-w-2xl  w-[90%] mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <!-- Post Header -->
                    <div class="flex items-center gap-3 p-4">
                        <div class="h-10 w-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
                            <!-- Profile Image -->
                            <img src="${post.profile}" alt="avatar">
                        </div>
                        <div>
                            <h3 class="text-sm font-semibold text-gray-900">${post.username}</h3>
                            <p class="text-xs text-gray-500">
                            ${(Math.floor(Math.random() * 9) + 2) + ' ' + times[Math.floor(Math.random() * times.length)]} ago
                            </p>
                        </div>
                    </div>

                    <!-- Post Text -->
                    <div class="px-4 pb-3">
                        <p class="text-sm text-gray-700 leading-relaxed">
                            ${post.postText}
                        </p>
                    </div>

                    <!-- Post Images  -->

                    <div class="grid grid-cols-2 gap-0.5 bg-gray-100 border-y border-gray-100">
                        <img src="${post.images[0]}" alt="post" class="w-full h-64 object-cover">
                        <img src="${post.images[1]}" alt="post" class="w-full h-64 object-cover">
                    </div>

                    <!-- Interaction Bar -->
                    <div class="flex items-center justify-between p-3">
                        <div class="flex items-center gap-1">
                            <!-- Like -->
                            <button onclick="fillLikeIcon(event)"
                                class="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path
                                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                </svg>
                            </button>

                            <!-- Contact/Message -->
                            <button
                                class="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                                <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </button>
                            <!-- Ask Icon Button -->
                            
                            <button onclick="chatOpen()"
                                class="w-full py-1 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 ">
                                Ask for it
                            </button>
                        </div>

                        <!-- Save -->
                        <button onclick="fillSaveIcon(event)"
                            class="p-2 text-gray-500  hover:bg-yellow-50 hover:text-gray-600 rounded-lg transition-colors">
                            <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                            </svg>
                        </button>
                    </div>
                </div>
    
    `
    feed.insertAdjacentHTML('beforeend', newPost);
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        // load 3 new posts
        getPost()
        getPost()
        getPost()
    }
}, { threshold: 1.0 });

observer.observe(loader);