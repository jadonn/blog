import content from './_content';
import showdown from 'showdown';

export function get(req, res) {
    const conv = new showdown.Converter({metadata: true});
    const files = content.files();
    const posts = [];
    for (const file of files){
        const rawPost = content.file(file);
        const html = conv.makeHtml(rawPost);
        const metadata = conv.getMetadata();
        const post = {
                title: metadata.title,
                slug: metadata.slug
        };
        posts.push(post);
    }

    res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(posts));
}