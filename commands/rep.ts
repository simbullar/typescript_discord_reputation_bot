import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("rep")
  .setDescription("Gives your amount of reputation!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("test");
}