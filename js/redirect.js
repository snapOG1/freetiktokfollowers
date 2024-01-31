
var connectingAnimation=document.getElementById('connecting-wrapper');
var firstform=document.getElementById("form-wrapper");
var chooseFollowers=document.getElementById('choose-followers');
var circleLoading = document.getElementById('circleLoading');
var humanVerification = document.getElementById('human-verification-wrapper');

var connectBtn=document.getElementById('connectBtn');
var f1000Btn=document.getElementById('1000');
var f2500Btn=document.getElementById('2500');
var f5000Btn=document.getElementById('5000');

connectingAnimation.style.display="none";
chooseFollowers.style.display="none";
circleLoading.style.display="none";
humanVerification.style.display="none";

connectBtn.addEventListener("click", function(){
    var username = document.getElementById('player-username').value;
    if(document.getElementById('player-username').value != ''){
        firstform.style.display="none";
        connectingAnimation.style.display="block";
        document.getElementById('verificationUsername').innerHTML=`<h4>Username:<br>${username}</h4>`;
        setTimeout(function(){
            connectingAnimation.style.display="none";
            chooseFollowers.style.display="block";
            document.getElementById('usernameFollowersPage').innerHTML= username;
        }, 3000);
    }
    else{
        window.alert("Enter Your Username");
    }
});


document.getElementById('numberFollowers').style.display="none";
var successGeneration = document.getElementById('generationSuccess');

function followerCounter(num){
    followers=num;
    chooseFollowers.style.display="none";
    connectingAnimation.style.display="block";
    document.getElementById('followersFinalPage').innerHTML=num;
    setTimeout(function(){
        connectingAnimation.style.display="none";
        document.getElementById('numberFollowers').style.display="block";
        document.getElementById('generationSuccess').style.display="none";

        document.getElementById('generationSuccess').classList.add('animated', 'bounceIn', 'animation-delay-200');
        successGeneration.innerHTML=`Generating <span class="red-number">${num}</span> Followers`;
        successGeneration.style.display="block";  

        for(var i=1; i<=followers; i++){
            (function(count) {
                setTimeout(function() {
                    document.getElementById('increasing-followers').innerHTML = count;
                }, count*2); // Delay each animation by i * 1000 milliseconds  
            })(i);
        }

        setTimeout(function(){
            document.getElementById('success').style.backgroundColor='rgb(57, 202, 255)';
            document.getElementById('numberFollowers').classList.add('animated', 'bounceIn', 'animation-delay-200');
            successGeneration.innerHTML=`<span class="gen_mesg"> Successfully<br>Generated </span>`;
            
            setTimeout(function(){
                document.getElementById('success').style.display="none";
                circleLoading.style.display="block";
                successGeneration.innerHTML=`<span style="color:black;">Finalizing<br>Generalization...</span>`;

                setTimeout(function(){
                    successGeneration.innerHTML=`<span style="color:black;">Performing<br>Verification...</span>`;

                    setTimeout(function(){
                        circleLoading.style.display="none";
                        successGeneration.innerHTML=`<i class="bi bi-x-circle fa-3x animated bounceIn animation-delay-400" style="color:red;"></i><br><span class="animated bounceIn animation-delay-400" style="color:red; font-size:40px;">Automatic <br>Verification<br>Failed</span>`;
                        
                        setTimeout(function(){
                            successGeneration.innerHTML=`<i class="bi bi-exclamation-triangle fa-3x animated bounceIn animation-delay-400"></i><br><span style="font-size:40px;" class="animated bounceIn animation-delay-400">Please <br>Verify<br>Manually</span>`;
                            setTimeout(function(){
                                document.getElementById('numberFollowers').style.display="none";
                                humanVerification.style.display="block";
                            },2000);
                        }, 3000);
                    }, 4000);
                }, 4000);
            }, 4000);
        }, i*2);
    }, 2000);

    
}






f1000Btn.addEventListener("click", function(){
    followerCounter(1000);
});
f2500Btn.addEventListener("click", function(){
    followerCounter(2500);
});
f5000Btn.addEventListener("click", function(){
    followerCounter(5000);
});





// Function to update the countdown timer every second
function updateCountdown() {
    // Get the remaining time in seconds
    var remainingSeconds = countdownMinutes * 60 + countdownSeconds;

    // Calculate remaining minutes and seconds
    var remainingMinutes = Math.floor(remainingSeconds / 60);
    var remainingSecondsDisplay = remainingSeconds % 60;

    // Format the remaining time
    var countdownString = remainingMinutes + " minutes " + remainingSecondsDisplay + " seconds remaining";

    // Update the content of the HTML element with the countdown timer
    document.getElementById("countdown").textContent = countdownString;

    // Decrease the countdown time by 1 second
    if (countdownSeconds > 0) {
        countdownSeconds--;
    } else {
        countdownMinutes--;
        countdownSeconds = 59;
    }

    // Stop the countdown when it reaches 0
    if (remainingSeconds <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").textContent = "Countdown completed!";
        // Reload the webpage after 3 seconds
        setTimeout(function() {
            location.reload();
        }, 3000);
    }
}

// Initialize countdown time to 5 minutes and 59 seconds
var countdownMinutes = 5;
var countdownSeconds = 59;

// Call the updateCountdown function every second
var countdownInterval = setInterval(updateCountdown, 1000);






