export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export function printNodes (head) {
    let cur = head;
    let str = '';
    while (cur) {
        str += `${cur.val} --> `
        cur = cur.next;
    }
    console.log(str);
    return str;
}