/**
 * Contains the miscellaneous route handlers.
 * @author Yohanes Getinet <https://github.com/YohanesGetinet1>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
