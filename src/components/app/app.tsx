import clsx from 'clsx';
import { CSSProperties, useState } from 'react';

import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { Article } from '../article/Article';
import { defaultArticleState } from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleState={setArticleState} />
			<Article />
		</main>
	);
};
