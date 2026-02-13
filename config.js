const CONFIG = {
    valentineName: "Syril",

    pageTitle: "HI PO HEHE ISTORBOHIN LANG KITA SAGLIT",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  
        bears: ['🧸', '🐻']                      
    },

    questions: {
        first: {
            text: "hindi naman nakakagulat ano",                                    
            yesBtn: "Nagulat ako",                                             
            noBtn: "Hindi ako nagulat",                                            
        },
        second: {
            text: "anw unahan ko na sila, happy hearts day! 💝 kamusta review?",                                   
            yesBtn: "Ok lang",                                             
            noBtn: "Mahirap",                                                  
        },
        third: {
          text: "may lakad ka ba after exams mo?",                          
            startText: "Meroooon!",                                   
            nextBtn: "baka umuwi agad",
            secretAnswer: "wala? tara date treat ko!",                                             
        },
        fourth: {
            text: "Will you be my Valentine? (nilakasan loob at kinapalan ang mukha)", 
            yesBtn: "Yes!",                                            
            noBtn: "No",                                                
        },
        fifth: {
            text: "Thank you! Goodluck sa exams mo later, Sy!", 
            yesBtn: "100% papasa",                                             
            noBtn: "Basic midterms lang 'to",                                                
        },
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "p.s hindi to social experiment",  // Shows when they go past 5000%
        high: "Naisip ko lang na batiin ka",              // Shows when they go past 1000%
        normal: "coz u deserve it"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "thank you Lord, answered prayers! 🥰",  // Main title after they say yes
        message: "kitakits po!",  // Sub-message after they say yes
        emojis: "🎁💖🤗💝"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "passenger.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 