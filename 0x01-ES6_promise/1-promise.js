export default getFullResponseFromAPI(success){
 return new Promise((resolve, reject) => {
  if (success) {
   resolve ({
	"status": 200,
	"body": "Success"
});
}else (new Error(
	'The fake API is not working currently',
));
}
});
}
