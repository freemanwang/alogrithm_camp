class Heap {
	constructor(size, compareFn) {
        this.heap = [];
		if (size) {
			this.size = size; // Heap's maximum capacity
		}
		if (compareFn) {
			this.compareFn = compareFn;
		} else {
			this.compareFn = (a, b) => a - b;
		}
		
    }

    // Insert element
    push(key) {
        this.heap.push(key);
        this.heapifyUp(this.heap.length - 1);

        // If the size of the heap exceeds K, remove the root element
        if (this.size && this.heap.length > this.size) {
            this.pop();
        }
    }

    // Remove and return the root element
    pop() {
        // Swap the root element with the rightmost leaf node
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
        // Remove the root element
        const removedValue = this.heap.pop();
        // Perform heapifyDown from the root
        this.heapifyDown();
        return removedValue;
    }

	// Get the root element of the heap
	peek() {
        return this.heap[0];
    }

	compare (index1, index2) {
		return this.compareFn(this.heap[index1], this.heap[index2]);
	}
}

class MaxHeap extends Heap {
    // Perform upward adjustment
    heapifyUp(index) {
		// Implementation
		// swap with parent if parent value is smaller than current value
		let curIdx = index;
		let parentIdx = Math.floor((curIdx - 1) / 2);
		while (curIdx > 0 && this.compare(curIdx, parentIdx) > 0) {
			[this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]];
			curIdx = parentIdx;
			parentIdx = Math.floor((curIdx - 1) / 2);
		}
    }

    // Perform downward adjustment from root
    heapifyDown() {
        // Implementation
		// swap with largest child if parent value is smaller
		let curIdx = 0;
		let largestIdx = curIdx;
		let left = 2 * curIdx + 1;
		let right = left + 1;
		const length = this.heap.length;
		let swapped = true;

		while (swapped) {
			// if parent is smaller than left child
			if (left < length && this.compare(largestIdx, left) < 0) {
				largestIdx = left;
			}
	
			if (right < length && this.compare(largestIdx, right) < 0) {
				largestIdx = right;
			}
	
			// needs swap
			if (largestIdx !== curIdx) {
				[this.heap[largestIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[largestIdx]];
				curIdx = largestIdx;
				left = 2 * curIdx + 1;
				right = left + 1;
			} else { // end while loop if no swap happen
				swapped = false;
			}
		}

    }
}

class MinHeap extends Heap {
    // Perform upward adjustment
    heapifyUp(index) {
		// Implementation
		// swap with parent if parent value is larger than current value
		let curIdx = index;
		let parentIdx = Math.floor((curIdx - 1) / 2);
		while (curIdx > 0 && this.compare(curIdx, parentIdx) < 0) {
			[this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]];
			curIdx = parentIdx;
			parentIdx = Math.floor((curIdx - 1) / 2);
		}
    }

	  // Perform downward adjustment from root
	  heapifyDown() {
        // Implementation
		// swap with largest child if parent value is smaller
		let curIdx = 0;
		let lowest = curIdx;
		let left = 2 * curIdx + 1;
		let right = left + 1;
		const length = this.heap.length;
		let swapped = true;

		while (swapped) {
			// if parent is smaller than left child
			if (left < length && this.compare(lowest, left) > 0) {
				lowest = left;
			}
	
			if (right < length && this.compare(lowest, right) > 0) {
				lowest = right;
			}
	
			// needs swap
			if (lowest !== curIdx) {
				[this.heap[lowest], this.heap[curIdx]] = [this.heap[curIdx], this.heap[lowest]];
				curIdx = lowest;
				left = 2 * curIdx + 1;
				right = left + 1;
			} else { // end while loop if no swap happen
				swapped = false;
			}
		}

    }
}

export { MaxHeap, MinHeap };

// Usage example
// const maxHeap = new MaxHeap(3);
// maxHeap.push(20);
// maxHeap.push(15);
// maxHeap.push(30);
// maxHeap.push(10);  // Insert and keep if it's one of the top 3 largest
// maxHeap.push(40);  // Insert and possibly replace an existing smaller element

// console.log('maxHeap: ', maxHeap.heap); // The heap will only contain the top 3 largest elements

// const minHeap = new MinHeap(3);
// minHeap.push(20);
// minHeap.push(15);
// minHeap.push(30);
// minHeap.push(10);  // Insert and keep if it's one of the top 3 largest
// minHeap.push(40);  // Insert and possibly replace an existing smaller element

// console.log('minHeap: ', minHeap.heap); 