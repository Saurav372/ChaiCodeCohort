function checkVotingELigibility(age) {
    if (age>=18)
    {
        return "Eligible"
    }
    else
    {
        return "Not Eligible"
    }
}

console.log(checkVotingELigibility(45));