
function Input() {
    function submitHandler(event) {
        console.log(event.target);
        const firstName = event.target[0].value;
        const lastName = event.target[1].value;
        const phone = event.target[2].value;
        const amount = event.target[3].value;
        const subject = "Hello from Tech-Career";
        const body = `${firstName} ${lastName} - ${phone} <br> ${amount}`;
        window.open(`mailto:chen@gmail.com?subject=${subject}&body=${body}`);
    }

    return (
        <div>
            <fieldset>
                <legend>Contact Me</legend>
                <form onSubmit={submitHandler}>
                    <div><input type="text" name="first" placeholder="Enter first name" /></div>
                    <div><input type="text" name="last" placeholder="Enter last name" /></div>
                    <div><input type="text" name="phone" placeholder="Enter Phone Number" /></div>
                    <div><input type="text" name="amount" placeholder="Enter Email" /></div>
                    <button type="submit">sand</button>
                </form>
            </fieldset>
        </div>
    )
}
export default Input;

