const querys = {
    insertUser: "INSERT INTO users(name,appat,apmat,email,psw_hash) VALUES($1,$2,$3,$4,$5);",
    getUser: "SELECT * FROM users WHERE email=$1;",
    incrementUserCart: "INSERT INTO carts (user_id, order_item_id, quantity) VALUES ($1, $2, 1) ON CONFLICT (user_id, order_item_id) DO UPDATE SET quantity = carts.quantity + 1;",
    decrementUserCart: "UPDATE carts SET quantity = quantity - 1 WHERE user_id = $1;",
    getCurrentUserCart: "SELECT * FROM carts WHERE user_id = $1"
}
export default querys;