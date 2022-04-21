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
			'selector': "p",
		}
	},
	edit( { attributes, setAttributes} ) {
		const { title } = attributes;

		function setTitle(newTitle) {
			setAttributes({ title: newTitle } );
		}

		return (
			<div>
				<RichText
					tagName="p"
					placeholder="Name"
					value={title}
					onChange={setTitle}
				/>
			</div>
		);
	},

	save: () => { return <p>Test</p> }

});