import model from '../models';
import validations from '../helpers/validations';

const { User } = model;

const controller = {
  /**
   * @description Get User Profile
   * @param {*} req
   * @param {*} res
   * @returns {object} response and user profile data
   */
  async getUserProfile(req, res) {
    if (!validations.verifyUUID(req.params.id)) {
      return res.status(400).json({
        error: 'id not valid',
      });
    }

    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const profile = {
      id: user.id,
      firstname: user.first_name,
      lastname: user.last_name,
      title: user.title,
      phonenumber: user.phone_number,
      email: user.email,
      isreviewer: user.is_reviewer,
      researchfield: user.research_field,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res.status(200).json({
      data: [profile],
    });
  },
};

export default controller;