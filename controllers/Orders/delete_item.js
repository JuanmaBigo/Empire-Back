import Item from '../../models/Item.js';

const controller = {
  delete_item: async (req, res, next) => {
    try {
      const item = await Item.findByIdAndDelete(req.params.id)
      if (item) {
        return res.status(200).json({
          success: true,
        })
      } else {
        return res.status(400).json({
          success: false,
          message: "item not found"
        })
      }
    } catch (error) {
      next(error)
    }
  }
}
export default controller
