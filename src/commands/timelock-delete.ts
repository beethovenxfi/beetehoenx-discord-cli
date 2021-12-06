import { inlineCode, SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { CommandHandler } from "./index";
import { deleteTransaction } from "../timelock/timelock-transactions";
import { MODERATOR_ROLE } from "../config/config";

async function execute(interaction: CommandInteraction) {
  const transactionId = interaction.options.getString("transaction_id");
  await deleteTransaction(transactionId!);

  await interaction.reply(
    inlineCode(`Transaction with ID ${transactionId} deleted`)
  );
}

export const timelockDelete: CommandHandler = {
  definition: new SlashCommandBuilder()
    .setName("timelock_delete")
    .setDescription("Delete stored transaction entry")
    .addStringOption((option) =>
      option
        .setName("transaction_id")
        .setDescription("Transaction ID")
        .setRequired(true)
    )
    .setDefaultPermission(false),
  execute,
  permissionRoles: [MODERATOR_ROLE],
};
