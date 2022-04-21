import './index.scss';
import block from '../block.json';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from "@wordpress/block-editor";

registerBlockType('blocks/example', {
	title: block.title,
	icon: block.icon,
	category: block.category,
	attributes: {
		title: {
			'type': "string",
			'source': "html",
			'selector': "h1",
			default: 'hello world'
		}
	},
	edit( { attributes, setAttributes} ) {
		let { title } = attributes;

		function setTitle(newTitle) {
			setAttributes({ title: newTitle } );
		}

		return (
			<div>
				<RichText
					tagName="h1"
					placeholder="Name"
					value={title}
					onChange={setTitle}
				/>
			</div>
		);
	},

	save: ( { attributes } ) => { 
		const { title } = attributes;

		return (
			<div>
				<h1>{title}</h1>
			</div>
		);
	}

});