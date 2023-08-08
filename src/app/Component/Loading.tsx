import React from 'react';
import './ComponentStyle.css'
interface Props {

}

const Loading: React.FC<Props> = (props) => {
  return (
    <div className="loaderx">
	<div className="loaderx-inner">
		<div className="loaderx-line-wrap">
			<div className="loaderx-line"></div>
		</div>
		<div className="loaderx-line-wrap">
			<div className="loaderx-line"></div>
		</div>
		<div className="loaderx-line-wrap">
			<div className="loaderx-line"></div>
		</div>
		<div className="loaderx-line-wrap">
			<div className="loaderx-line"></div>
		</div>
		<div className="loaderx-line-wrap">
			<div className="loaderx-line"></div>
		</div>
	</div>
</div>
  );
}

export default Loading;
