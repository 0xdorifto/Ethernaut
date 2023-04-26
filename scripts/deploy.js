async function main() {
  const [deployer] = await ethers.getSigners();

  // Configure to what you want to deploy
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
