/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7800385Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Campagne
/// </summary>
public class Vehicles_Campaigns
{
	/// <summary>
	/// Ammontare del premio
	/// </summary>
	/// <seealso cref="BonusMultiplicative"/>
	public double BonusAmount { get; set; }

	/// <summary>
	/// Descrizione del premio
	/// </summary>
	public string? BonusDescription { get; set; }

	/// <summary>
	/// ID premio
	/// </summary>
	public string BonusId { get; set; }

	/// <summary>
	/// Premio moltiplicativo
	/// </summary>
	/// <remarks>
	/// <para>Indica se l'importo del premio è espresso come un fattore moltiplicativo (es. percentuale) anziché additivo (importo fisso).</para>
	/// </remarks>
	/// <seealso cref="BonusAmount"/>
	public bool BonusMultiplicative { get; set; }

	/// <summary>
	/// ID campagna
	/// </summary>
	public string CampaignId { get; set; }

	/// <summary>
	/// Descrizione della campagna
	/// </summary>
	public string? Description { get; set; }

	/// <summary>
	/// ID elemento
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco dell'elemento.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Nome della campagna
	/// </summary>
	public string? Label { get; set; }

	/// <summary>
	/// Data di inizio della validità della campagna
	/// </summary>
	public DateTime ValidSince { get; set; }

	/// <summary>
	/// Data di fine della validità della campagna
	/// </summary>
	public DateTime ValidUntil { get; set; }
}
