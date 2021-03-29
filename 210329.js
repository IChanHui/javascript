/**
 * Flip Binary Tree To Match Preorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : righ4t)
 * }
 
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    //let , const 로 선언된 변수는 외부 스코프에 영향이 안감. 그래서 var보다 선호하는 편(코드가 혼라스러워 질수있음)
    //const로 선언된 값은 절대 변하지 않기에 오작동을 예방 할 수 있다.
    //배열, 함수, 객체는 const로 선언을 해도 식별자.프로퍼티명 으로 직접 접근해서 값 수정가능.(배열,함수,객체의 재할당 예방)
    // ** 값이 변해야 할 경우 let를 사용하자.
    
    let i = 0               //i는 식별자, 0 = i의 값이면서 리터널(변수선언, 재할당가능)
    const result = []       // cons(상수선언,재할당 불가능)

    const dfs = (node, v) => {
        if (node == null) return true
        if (node.val !== v[i++]) return false          
        if (node.left !== null && node.left.val !== v[i]) {
            result.push(node.val) 
            return dfs(node.right, v) && dfs(node.left, v)
        }
        return dfs(node.left, v) && dfs(node.right, v)
    }
    return dfs(root, voyage) ? result : [-1]
    
};
