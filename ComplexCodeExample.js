/*
Filename: ComplexCodeExample.js
Content: This code demonstrates a complex implementation of a data structure and algorithm for finding the shortest path in a weighted directed graph using Dijkstra's algorithm.
*/

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.edges[node] = {};
  }

  addEdge(nodeA, nodeB, weight) {
    this.edges[nodeA][nodeB] = weight;
  }

  dijkstra(startNode, endNode) {
    let distances = {};
    let previousNodes = {};
    let priorityQueue = new PriorityQueue();

    for (let node of this.nodes) {
      if (node === startNode) distances[node] = 0;
      else distances[node] = Infinity;

      priorityQueue.enqueue(node, distances[node]);
      previousNodes[node] = null;
    }

    while (!priorityQueue.isEmpty()) {
      let currentNode = priorityQueue.dequeue();

      if (currentNode === endNode) break;

      for (let neighbor in this.edges[currentNode]) {
        let distance = distances[currentNode] + this.edges[currentNode][neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previousNodes[neighbor] = currentNode;
          priorityQueue.enqueue(neighbor, distance);
        }
      }
    }

    let path = [endNode];
    let previousNode = previousNodes[endNode];

    while (previousNode) {
      path.push(previousNode);
      previousNode = previousNodes[previousNode];
    }

    path.reverse();

    return { distance: distances[endNode], path: path };
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    let queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (queueElement.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) this.queue.push(queueElement);
  }

  dequeue() {
    return this.queue.shift().element;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Usage example:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);
graph.addEdge('C', 'E', 7);
graph.addEdge('D', 'E', 3);

const shortestPath = graph.dijkstra('A', 'E');
console.log(shortestPath);