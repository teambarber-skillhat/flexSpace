import dbConnect from '../lib/mongodb';
import User from '../lib/User';

export async function POST(req) {
  await dbConnect();
  const data = await req.formData();
  const email = data.get('email');

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          status: 400,
          message: 'Email already in the waitlist',
        }),
      );
    }

    const newUser = new User({ email });
    await newUser.save();
  } catch (error) {
    return new Response(
      JSON.stringify({ status: 500, message: 'Internal Server Error' }),
    );
  }

  return new Response(
    JSON.stringify({
      status: 200,
      message: 'Saved successfully to the waitlist',
    }),
  );
}
