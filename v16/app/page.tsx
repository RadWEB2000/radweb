import { Badge } from 'ui/index';

export default function Home() {
	return (
		<>
			<h1 className='fsz-3xl'>Strona internetowa</h1>
			<Badge
				category='ppc'
				title='Reklamy Google'
			/>
			<Badge
				title='New Blog Post'
				category='news'
			/>
			<Badge
				title='PPC Campaign'
				category='seo'
			/>
		</>
	);
}
