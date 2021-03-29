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
    /**
    * let , const 로 선언된 변수는 외부 스코프에 영향이 안감. 그래서 var보다 선호하는 편(코드가 혼라스러워 질수있음)
    * const로 선언된 값은 절대 변하지 않기에 오작동을 예방 할 수 있다.
    * 배열, 함수, 객체는 const로 선언을 해도 식별자.프로퍼티명 으로 직접 접근해서 값 수정가능.(배열,함수,객체의 재할당 예방)
    *   ++값이 변해야 할 경우 let를 사용하자.
    */
    
    let i = 0               //i는 식별자, 0 = i의 값이면서 리터널(변수선언, 재할당가능)
    const result = []       // cons(상수선언,재할당 불가능)

    /**
    * 깊이 우선 탐색 (DFS(DFS, Depth-First Search))
    *   : 루트 노드에서 다음 분기로 넘어가기전에 해당 분기를 완벽히 탐색하는 방법(모든 노드를 방문할 때 사용)
    * 미로를 탐색하게 될때 한 방향으로 계속 가다가 가로막혔을때 가장 가까운 갈림길로 되돌아가서 다른방향으로 다시 탐색하는 방법과 유사
    * 너비 우선 탐색 (BFS)보다 느리지만 간단하다
    * 자기 자신을 호출하는 순환 알고리즘을 가지고 있으며 다른 형태의 트리 순회는 모두 DFS의 한 종류이다.
    * 알고리즘을 구현할때 주의할점은 어떤 노드를 탐색했는지 여부검사를 무조건 거쳐야 무한루프에 안빠지게 된다.
    */
    
    //코드 동작이 내가 생각하는 동작이 맞는지 놓친부분이 무엇인지 모르겠음
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
