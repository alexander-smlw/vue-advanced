import server from '@/api/http';

export async function load(token){
	let { data } = await server.get('cart/load.php', { params: { token }, vueErrorType: 'critical'});
	return data;
}

export async function add(token, id){
	let { data } = await server.get(`cart/add.php?token=${token}&id=${id}`, { vueAlert: 'при добавлении товара', vueErrorType: 'common' });
	return data;
}

export async function remove(token, id){
	let { data } = await server.get(`cart/remove.php?token=${token}&id=${id}`, { vueAlert: 'при удалении товара', vueErrorType: 'common' });
	return data;
}

export async function change(token, id, cnt){
	let { data } = await server.get(`cart/change.php?token=${token}&id=${id}&cnt=${cnt}`);
	return data;
}