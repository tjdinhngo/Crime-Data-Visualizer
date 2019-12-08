import React from "react";
import { PieChart } from "react-d3-components";
class PieGraph extends React.Component{
    constructor(props)
    {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        data: [],
        graphData: []
        }
        this.makeGraph = this.makeGraph.bind(this);
    }
    componentDidMount() {
      fetch("http://127.0.0.1:3000/api/crimes")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

        makeGraph() {
          var data = {
            label: 'Weapon Distribution',
            values: this.state.graphData
          };
          return (data);
        }
    render() {
      const { error, isLoaded, data } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
            var xydata = [];
            var unique_weapon_types = "";
            var crime_count_by_weapon_type = 0;
            for (var i = 0; i < data.unique_weapon_types.length; i++) {
            var newdata = {x: data.unique_weapon_types[i], y: data.crime_count_by_weapon_type[data.unique_weapon_types[i]]};

            xydata.push(newdata);
        }
        this.state.graphData = [... xydata];

        return (
    <PieChart
      data={this.makeGraph()}
      width={400}
      height={400}
      margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
    />
  );
}
}
}
export default PieGraph;
