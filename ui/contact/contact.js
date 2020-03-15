import './contact.scss'

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xoqljpqz"
                method="POST"
                className="Form"
            >
                <label>Name:</label>
                <input type="text" name="name" required />
                <label>Email:</label>
                <input type="email" name="email" required />
                <br></br>
                <label id="msg-label">Message:</label>
                <textarea type="text" name="message" maxlength="400" id="message" required />
                <br></br>
                {status === "SUCCESS" ? <h2>Thanks!</h2> : <button>Submit</button>}
                {status === "ERROR" && <h2>Ooops! There was an error.</h2>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
