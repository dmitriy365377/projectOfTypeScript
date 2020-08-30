import React from 'react';

interface IState {
    title: string
}

export class PostForm extends React.Component<{}, IState> {

    constructor(props: IState) {
        super(props)
        this.state = {
            title: ""
        }
    }

    submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { title } = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }

        this.setState({ title: '' })
    }

    changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist()
        this.setState((prev) => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }

}