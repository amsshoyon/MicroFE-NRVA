const nextConfig = {
	reactStrictMode: true,
	webpack: (config, options) => {
		config.plugins.push(
			new options.webpack.container.ModuleFederationPlugin({
				name: "next-app",
				library: {
					type: config.output.libraryTarget,
					name: "next-app",
				},
				filename: "static/runtime/remoteEntry.js",
				remotes: {},
				exposes: {
					"./AboutCard": "./components/AboutCard",
				},
				shared: {
					react: {
						eager: true,
						singleton: true,
						requiredVersion: false,
					},
				},
			})
		);

		config.module.rules.push({
			test: /_app.js/,
			loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
		});

		return config;
	},
};

module.exports = nextConfig;
