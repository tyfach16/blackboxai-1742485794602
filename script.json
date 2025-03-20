document.addEventListener('DOMContentLoaded', function() {
    // Create starfield background
    const starfield = document.getElementById('starfield');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 1 + 's';
        starfield.appendChild(star);
    }

    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const poemText = document.getElementById('poem').textContent;
    let utterance = null;

    // Initialize speech synthesis
    const synth = window.speechSynthesis;
    
    function createUtterance() {
        utterance = new SpeechSynthesisUtterance(poemText);
        utterance.rate = 0.9;  // Slightly slower for dramatic effect
        utterance.pitch = 0.8; // Deeper voice
        utterance.volume = 1.0;
        
        // Try to find a deeper voice
        const voices = synth.getVoices();
        const preferredVoice = voices.find(voice => 
            voice.name.toLowerCase().includes('male') || 
            voice.name.toLowerCase().includes('deep')
        );
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        }

        // Event handlers
        utterance.onend = function() {
            playButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
        };

        utterance.onerror = function(event) {
            console.error('SpeechSynthesis Error:', event);
            alert('Sorry, there was an error playing the poem. Please try again.');
            playButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
        };
    }

    // Play button click handler
    playButton.addEventListener('click', function() {
        try {
            // Cancel any ongoing speech
            synth.cancel();
            
            // Create new utterance
            createUtterance();
            
            // Start speaking
            synth.speak(utterance);
            
            // Update UI
            playButton.classList.add('hidden');
            pauseButton.classList.remove('hidden');
        } catch (error) {
            console.error('Error starting speech:', error);
            alert('Sorry, there was an error starting the poem. Please try again.');
        }
    });

    // Pause button click handler
    pauseButton.addEventListener('click', function() {
        try {
            if (synth.speaking) {
                synth.cancel();
                playButton.classList.remove('hidden');
                pauseButton.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error stopping speech:', error);
        }
    });

    // Handle page visibility change
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && synth.speaking) {
            synth.cancel();
            playButton.classList.remove('hidden');
            pauseButton.classList.add('hidden');
        }
    });

    // Initialize voices when they're loaded
    synth.onvoiceschanged = function() {
        createUtterance();
    };
});

// Add hover effect to poem stanzas
document.querySelectorAll('#poem p').forEach(stanza => {
    stanza.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    stanza.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});