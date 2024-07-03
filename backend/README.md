Managing Python Versions with conda
This project requires Python 3.9. Conda allows you to easily manage multiple Python versions on your system. Here's how to get started:

1. Check Existing Environments (Optional):

To see a list of conda environments on your system, run the following command in your terminal:

conda env list
This will display all environments and indicate the currently active one with an asterisk (\*).

2. Create a New Environment (if needed):

If you don't have a Python 3.9 environment, create one using this command:

conda create -n myenv python=3.9
Replace myenv with your preferred environment name. This command creates a new environment named myenv with Python 3.9 installed.

3. Activate the Environment:

Once you have a Python 3.9 environment, activate it using:

conda activate myenv
This activates the myenv environment, making Python 3.9 the active version for your project.

4. Verify Python Version:

You can verify the active Python version by running:

python --version
This should print Python 3.9.x (or similar) confirming successful activation.

5. Deactivate the Environment (Optional):

When you're done working on your project, you can deactivate the environment using:

conda deactivate
This deactivates the myenv environment and returns you to the base environment.
