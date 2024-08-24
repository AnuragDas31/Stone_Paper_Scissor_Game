let user_score = 0;
let comp_score = 0;

let choice = document.querySelectorAll(".choice");
let msg_container = document.querySelector(".msg-container");
let us_score = document.querySelector("#user-score");
let c_score = document.querySelector("#comp-score");

let check_draw = (User_choice , Comp_choice) => {
    if (User_choice === Comp_choice){
        msg_container.style.color = "#ffee32";
        msg_container.innerText = "OOPS!!...It's a Draw....Play Again";
        return true;
    }
    else {
        return false;
    }
};

let computer_choice = () => {
    let choices = ["Stone" , "Paper" , "Scissor"];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx];
};

let loser = (user_choice, comp_choice, comp_score) => {
    msg_container.style.color = "red";
    msg_container.innerText = `You Lose!!...You selected ${user_choice} and Computer selected ${comp_choice}`;
    c_score.innerText = `${comp_score}`;
};

let winner = (user_choice, comp_choice, user_score) => {
    msg_container.style.color = "#c3f550";
    msg_container.innerText = `You Win!!...You selected ${user_choice} and Computer selected ${comp_choice}`;
    us_score.innerText = `${user_score}`;
};

let check_winner = (user_choice , comp_choice) => 
    {
    if (check_draw(user_choice , comp_choice)){}
    else 
    {
        if (user_choice==="Stone"){
            if (comp_choice==="Paper"){
                comp_score++;
                loser(user_choice, comp_choice, comp_score);
            }
            else {
                user_score++;
                winner(user_choice, comp_choice, user_score);
                }
        }
        if (user_choice==="Paper"){
            if (comp_choice==="Scissor"){
                comp_score++;
                loser(user_choice, comp_choice, comp_score);;
            }
            else {
                user_score++;
                winner(user_choice, comp_choice, user_score);
            }
        }
        if (user_choice==="Scissor"){
            if (comp_choice==="Stone"){
                comp_score++;
                loser(user_choice, comp_choice, comp_score);
            }
            else {
                user_score++;
                winner(user_choice, comp_choice, user_score);
            }
        }
    }
};

choice.forEach((choice) => {
    us_score.innerText = `${user_score}`;
        c_score.innerText = `${comp_score}`;
    choice.addEventListener("click", () => {
        user_choice = choice.getAttribute("id");
        let comp_choice = computer_choice();

        check_winner(user_choice , comp_choice);

    });
});