// O(n) | O(h)

function nodeDepths(root) {
  // Write your code here.
	let result = 0;
	const collectNodeDepths = (node, depth) => {
		if (node.left) {
			result = result + 1 + depth;
			collectNodeDepths(node.left, depth+1);
		}
		if (node.right) {
			result = result + 1 + depth;
			collectNodeDepths(node.right, depth+1);
		}
		return;
	}
	collectNodeDepths(root, 0);
	return result;
}

// O(n) | O(h)
function nodeDepths(root, depth = 0) {
  // Write your code here.
	if (!root) return 0;
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

function nodeDepths(root) {
  // Write your code here.
	let sumOfDepths = 0;
	const stack = [{node: root, depth: 0}];
	while (stack.length > 0) {
		const {node, depth} = stack.pop();
		if (node === null) continue;
		sumOfDepths += depth;
		stack.push({node: node.left, depth: depth + 1});
		stack.push({node: node.right, depth: depth + 1});
	}
	return sumOfDepths;
}
