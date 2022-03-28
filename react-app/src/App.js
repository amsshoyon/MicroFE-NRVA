import React from "react";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<Layout>
			<div className="container mx-auto">
				<div className="flex justify-between py-6">
					<div className="w-2/4">
						<div className="p-4">
							<Form />
						</div>
					</div>
					<div className="w-1/4">
						<div className="p-4">
							
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default App;
