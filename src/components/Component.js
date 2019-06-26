import React from 'react'

export default class Component extends React.Component {

    Persons = [
        {
            name: "Sarra",
            img: "imgSarra",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum nibh mi, vitae pellentesque arcu commodo id. Integer fermentum semper nisi, at faucibus erat tempor sed. Etiam nec consequat nunc. Donec hendrerit ipsum sed bibendum tincidunt. Quisque interdum non urna. "
        },
        {
            name: "Daniel",
            img: "imgDaniel",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at tempus ligula, sed congue libero. Pellentesque elit leo, sodales in dolor non, blandit aliquam nisl. In sit amet viverra neque. Nullam vel faucibus ipsum. Aenean turpis erat, porttitor quis faucibus. "
        },
        {
            name: "Harold",
            img: "imgGarold",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque felis in elit sollicitudin semper. Ut non posuere justo, sit amet efficitur eros. Nunc in magna orci. Aliquam a mi molestie, luctus ante vel, fermentum arcu. Nam porta augue hendrerit. "
        }
    ]

    getPerson(name){
        return this.Persons.find( el => {
            return el.name === name;
        })
    }

    state = {
        activePerson: this.getPerson("Sarra")
    }

    render() {
        return (
            <>
                <button onClick={ () => this.setState({ activePerson: this.getPerson("Sarra") }) }>Sarra</button>
                <button onClick={ () => this.setState({ activePerson: this.getPerson("Daniel") }) }>Daniel</button>
                <button onClick={ () => this.setState({ activePerson: this.getPerson("Harold") }) }>Harold</button>

                <br/>
                <img src={this.state.activePerson.img} alt={this.state.activePerson.name}/>
                <p>{this.state.activePerson.bio}</p>  
            </>

        )
    }
}