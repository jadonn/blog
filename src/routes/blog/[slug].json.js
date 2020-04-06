import content from './_content';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
    const { slug } = req.params;
    const exists = content.has(slug);
    if (exists) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});
        const post = {}
        post.slug = slug;
        post.content = content.file(slug);
        console.log(post);
		res.end(JSON.stringify(post));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
