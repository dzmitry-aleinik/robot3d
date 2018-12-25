import React from 'react';
import Plot from 'react-plotly.js';


class Graph extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      x: [1, 2, 3, 4, 5, 6, 7],
      y: [1, 2, 3, 4, 5, 6, 7],
      z: [1, 2, 3, 4, 5, 6, 7],
    }
  }
  render() {
    return (
      <div>
        <Plot>
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7],
            y: [1, 2, 3, 4, 5, 6, 7],
            z: [1, 2, 3, 4, 5, 6, 7],
            type: 'scatter3d',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3], z: [1, 2, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        
        </Plot>
      </div>
    )
  }
};

export default Graph;


/* 

Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
	mode: 'markers',
	marker: {
		size: 8,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};
debugger;
let dots = Array(100).fill(null);
console.log(dots);


xx = [1,2,3,4,5,6,7,8];
yy = [1,2,3,4,5,6,7,8];
zz = [1,2,3,4,5,6,7,8];

var trace2 = {
	x:xx, y: yy, z: zz,
	mode: 'markers',
	marker: {
		color: ['black', 'red','red','red','black','red'],
		size: [10,11,12,13,14,15,16,17,18,19],
		symbol: 'circle',
		line: {
		color: 'rgb(204, 204, 204)',
		width: 1},
		opacity: 0.8},
  type: 'scatter3d'};
  
  trace1.x = trace1.x.slice(1,10);
  trace1.y = trace1.y.slice(1,10);
  trace1.z = trace1.z.slice(1,10);

var data = [trace1, trace2];
var layout = {
  scene:{
	 aspectmode: "manual",
   aspectratio: {
     x: 1, y: 0.7, z: 1,
    },
   xaxis: {
    nticks: 1,
    range: [0, 10],
  },
   yaxis: {
    nticks: 1,
    range: [0, 10],
  },
   zaxis: {
   nticks: 1,
   range: [0, 10],
  }},
};
Plotly.newPlot('App', data, layout);
}); */