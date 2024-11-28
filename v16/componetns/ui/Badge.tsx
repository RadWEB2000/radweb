type tBadgeCategory =
	| 'seo'
	| 'www'
	| 'ppc'
	| 'web care'
	| 'news'
	| 'social media';

type tBadge = {
	title: string;
	category: tBadgeCategory;
};

export default function Badge(props: tBadge) {
	function getCategoryColor(category: tBadgeCategory) {
		switch (category) {
			case 'news':
				return 'red';
			case 'ppc':
				return 'blue';
			case 'seo':
				return 'green';
			case 'web care':
				return 'yellow';
			case 'www':
				return 'aqua';
			case 'social media':
				return 'fuchsia';
			default:
				return 'jet';
		}
	}

	console.log(getCategoryColor(props.category));

	return (
		<span className='d-block mx-auto my-5 bg-slate-800'>{props.title}</span>
	);
}
