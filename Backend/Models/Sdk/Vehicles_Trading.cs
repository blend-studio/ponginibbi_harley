/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6413508Z
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
/// Dati relativi ad acquisto e vendita
/// </summary>
public class Vehicles_Trading
{
	/// <summary>
	/// Prezzo base di acquisto
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? PurchaseBase { get; set; }

	/// <summary>
	/// Sconto sul prezzo di acquisto
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? PurchaseDiscount { get; set; }

	/// <summary>
	/// Incentivo sul prezzo di acquisto
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? PurchaseIncentive { get; set; }

	/// <summary>
	/// Prezzo totale di acquisto
	/// </summary>
	/// <remarks>
	/// <para>Somma di tutte le componenti del costo: PurchaseBase + PurchaseDiscount + PurchaseIncentive</para>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double PurchaseTotalPrice { get; set; }

	/// <summary>
	/// Costo accessori aftermarket
	/// </summary>
	/// <remarks>
	/// <para>Costo totale degli accessori aftermarket (non provenienti da casa madre)</para>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? SaleAftermarket { get; set; }

	/// <summary>
	/// Prezzo base di vendita
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? SaleBase { get; set; }

	/// <summary>
	/// Costo campagne
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? SaleCampaign { get; set; }

	/// <summary>
	/// Sconto sul prezzo di vendita
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? SaleDiscount { get; set; }

	/// <summary>
	/// Spese di vendita. Include la messa su strada
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	/// <seealso cref="SaleMss"/>
	public double? SaleExpenses { get; set; }

	/// <summary>
	/// Prezzo definitivo di vendita, inclusa IVA
	/// </summary>
	/// <seealso cref="SaleTotalPrice"/>
	public double? SaleFinalPrice { get; set; }

	/// <summary>
	/// Costo messa su strada
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	/// <seealso cref="SaleExpenses"/>
	public double? SaleMss { get; set; }

	/// <summary>
	/// Costo totale degli optional
	/// </summary>
	/// <remarks>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	public double? SaleOptionals { get; set; }

	/// <summary>
	/// Prezzo totale di vendita
	/// </summary>
	/// <remarks>
	/// <para>Somma di tutte le componenti del prezzo: SaleBase + SaleOptionals + SaleAftermarket + SaleExpenses + SaleCampaign + SaleDiscount</para>
	/// <para>Il prezzo si intende senza IVA.</para>
	/// </remarks>
	/// <seealso cref="SaleFinalPrice"/>
	public double SaleTotalPrice { get; set; }

	/// <summary>
	/// IVA applicata al prezzo di vendita
	/// </summary>
	public double SaleVatRate { get; set; }
}
