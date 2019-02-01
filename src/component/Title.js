import React from 'react';


class Titles extends React.Component {
    constructor(props){
        super(props)
        // this.onSort = this.onSort.bind(this);
        this.state = {
            items: this.props.items
        }
        
    }
    compareBy(key) {
        return function (a, b) {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };
      }
      
    sortBy(key) {
        debugger
        let arrayCopy = [...this.state.items];
        arrayCopy.sort(this.compareBy(key));
        //this.props.items = arrayCopy;
        this.setState({items: arrayCopy});
      }
    currentDate(date){
        const newDate = new Date(date);
        return newDate.getDate()+"/"+newDate.getMonth()+"/"+newDate.getFullYear();
    }

    render() {
        const matchStartedStyle = {
            background: "#03AC13"
        }

        const matchOffStyle = {
            background: "white"
        }

        const matchIndiaStyle = {
            background: "Blue"
        }
        
        return (
            <div>
                <table  >
                    <tr>
                        <th>Date</th>
                        <th onClick={() => this.sortBy('team-1')}>Team 1</th>
                        <th onClick={() => this.sortBy('team-2')}>Team 2</th>
                        <th>Type</th>
                        <th>toss_winner_team</th>
                        <th>winner_team</th>
                        <th>matchStarted</th>
                    </tr>
                    <tbody>
                    {this.state.items.map((item, i) =>(
                        <tr key={i} style={
                            item.matchStarted ? matchStartedStyle : matchOffStyle && item["team-2"] == "India" ? matchIndiaStyle : matchOffStyle}>
                            <td>{this.currentDate(item.date)}</td>
                            <td>{item["team-1"]}</td>
                            <td>{item["team-2"]}</td>
                            <td>{item.type}</td>
                            <td>{item["toss_winner_team"]}</td>
                            <td>{item["winner_team"]}</td>
                            <td>{item.matchStarted ? "True" : "False"}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Titles;