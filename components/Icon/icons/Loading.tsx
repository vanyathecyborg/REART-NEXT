import React from 'react';

const Loading = props => (
	<svg
		xmlnsXlink="http://www.w3.org/1999/xlink"
		version={1}
		width={32}
		height={32}
		viewBox="0 0 128 128"
		{...props}
	>
		<script
			type="text/ecmascript"
			// xlinkHref="//preloaders.net/jscripts/smil.user.js"
		/>
		<g>
			<circle cx={16} cy={64} r={16} fill="#ffffff" />
			<circle
				cx={16}
				cy={64}
				r={14.344}
				fill="#ffffff"
				transform="rotate(45 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={12.531}
				fill="#ffffff"
				transform="rotate(90 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={10.75}
				fill="#ffffff"
				transform="rotate(135 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={10.063}
				fill="#ffffff"
				transform="rotate(180 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={8.063}
				fill="#ffffff"
				transform="rotate(225 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={6.438}
				fill="#ffffff"
				transform="rotate(270 64 64)"
			/>
			<circle
				cx={16}
				cy={64}
				r={5.375}
				fill="#ffffff"
				transform="rotate(315 64 64)"
			/>
			<animateTransform
				attributeName="transform"
				type="rotate"
				values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
				calcMode="discrete"
				dur="720ms"
				repeatCount="indefinite"
			/>
		</g>
	</svg>
);

export default Loading;
