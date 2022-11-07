const BASE_URL =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f26a372-74a2-47fd-8b3b-8ea745f7cfeb/words.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T052728Z&X-Amz-Expires=86400&X-Amz-Signature=b88a4e99f894c8bb906531f1764c8dfa996a702f00a91ecaef8ae08c200a9e41&X-Amz-SignedHeaders=host&x-id=GetObject';

export const getWordApi = () => {
	fetch(BASE_URL)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
};
